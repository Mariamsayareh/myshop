import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
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
import useCart from "../../Hooks/useCart.js";
import useRemoveItmeCart from "../../Hooks/useRemoveItmeCart.js";
import useUpdateCaet from "../../Hooks/useUpdateCaet.js";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, isLoading, isError } = useCart();
  const { mutate: reomveItme, isPending } = useRemoveItmeCart();
  const { mutate: updateItme } = useUpdateCaet();

  const handleUpdate = (productId, action) => {
    const item = data.items.find(i => i.productId === productId);
    console.log(item)
    if (!item) return;

    updateItme({
      productId,
      count: action === '-' ? item.count - 1 : item.count + 1
    });
  };

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>{t('error')}</Typography>;

  return (
    <Box component="section" sx={{ py: 5 }}>
      <TableContainer>
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
                  <Box sx={{ border: "1px solid #ddd" }}>
                    <IconButton onClick={() => handleUpdate(item.productId, '-')}>
                      <RemoveIcon />
                    </IconButton>
                  </Box>

                  <Typography component="span">
                    {item.count}
                  </Typography>

                  <Box sx={{ border: "1px solid #ddd" }}>
                    <IconButton onClick={() => handleUpdate(item.productId, '+')}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </TableCell>

                <TableCell>${item.totalPrice}</TableCell>

                <TableCell>
                  <Button
                    color="error"
                    variant="contained"
                    onClick={() => reomveItme(item.productId)}
                    disabled={isPending}
                  >
                    {t('REMOVE')}
                  </Button>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={5} align="right">
                {t('Cart Total')} : ${data.cartTotal}
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
          onClick={() => navigate('/home')}
        >
          {t("Continue Shopping")}
        </Button>
      </Box>
    </Box>
  );
}
