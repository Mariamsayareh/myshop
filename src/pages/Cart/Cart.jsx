import {
  Box,
  Typography,
  IconButton,
  Button,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Table,
  CircularProgress
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from "react-i18next";
import useCart from "../../Hooks/useCart";
import useRemoveItmeCart from "../../Hooks/useRemoveItmeCart";
import useUpdateCaet from "../../Hooks/useUpdateCaet";
import useClearCart from "../../Hooks/useClearCart";
import { useNavigate } from "react-router-dom";
import HeroSec from "../../commponrnts/Hero/HeroSec";

export default function Cart() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, isLoading, isError } = useCart();
  const { mutate: removeItem, isPending } = useRemoveItmeCart();
  const { mutate: updateItem } = useUpdateCaet();
  const { mutate: clearCart, isPending: isClearing } = useClearCart();

  const handleUpdate = (productId, action) => {
    const item = data.items.find(i => i.productId === productId);
    if (!item) return;

    const newCount = action === '-' ? item.count - 1 : item.count + 1;

    if (newCount <= 0) {
      removeItem(productId);
      return;
    }

    updateItem({ productId, count: newCount });
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>{t('error')}</Typography>;

  return (
    <Box component="section" sx={{ pb: 5 }}>
      <HeroSec pageName='Your Shopping Cart' />
      <TableContainer sx={{ pt: 5 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>{t('Product name')}</TableCell>
              <TableCell>{t('Price')}</TableCell>
              <TableCell>{t('Quantity')}</TableCell>
              <TableCell>{t('Total')}</TableCell>
              <TableCell>{t('Action')}</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map(item => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>${item.price}</TableCell>

                <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <IconButton onClick={() => handleUpdate(item.productId, '-')}>
                    <RemoveIcon />
                  </IconButton>

                  <Typography>{item.count}</Typography>

                  <IconButton onClick={() => handleUpdate(item.productId, '+')}>
                    <AddIcon />
                  </IconButton>
                </TableCell>

                <TableCell>${item.totalPrice}</TableCell>

                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => removeItem(item.productId)}
                    disabled={isPending}
                  >
                    {t('REMOVE')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={3}>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => {
                    if (window.confirm(t('Are you sure you want to clear the cart?'))) {
                      clearCart();
                    }
                  }}
                  disabled={isClearing || data.items.length === 0}
                >
                  {t('Clear Cart')}
                </Button>
              </TableCell>

              <TableCell colSpan={2} align="right">
                <Typography fontWeight={600}>
                  {t('Cart Total')} : ${data.cartTotal}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate('/checkout')}
        >
          {t("Proceed to checkout")}
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')}
        >
          {t("Continue Shopping")}
        </Button>
      </Box>
    </Box>
  );
}
