import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  Divider,
  Link
} from "@mui/material";
import { Link as Links, useNavigate } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import useCart from "../../Hooks/useCart";
import useRemoveItmeCart from "../../Hooks/useRemoveItmeCart";
import useUpdateCaet from "../../Hooks/useUpdateCaet";
import { useTranslation } from "react-i18next";

export default function CartDrawer({ open, onClose }) {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { data } = useCart();
  const { mutate: removeItem } = useRemoveItmeCart();
  const { mutate: updateItem } = useUpdateCaet();
//console.log(data)
  if (!data || !data.items) return null;

  const subtotal = data.cartTotal;

  const handleUpdate = (productId, action) => {
    const item = data.items.find(i => i.productId === productId);
    if (!item) return;

    const newCount = action === "-" ? item.count - 1 : item.count + 1;
    if (newCount <= 0) {
      removeItem(productId);
      return;
    }
    updateItem({ productId, count: newCount });
  };

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
  <Box sx={{ width: 380, p: 3, display: "flex", flexDirection: "column", minHeight: "100%" }}>
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="h6" fontWeight={600}>{t("Your Cart")}</Typography>
      <IconButton onClick={onClose}><CloseIcon /></IconButton>
    </Box>

    <Divider sx={{ my: 2 }} />

    {data.items.length === 0 ? (
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <Typography fontWeight={'500'} variant="h4" sx={{ mb: 2 }}>{t("Your cart is empty")}</Typography>
        <Button
          variant="contained"
          sx={{ background: "#ce967e", "&:hover": { background: "#000", transform: "scale(1.05)" } }}
          onClick={() => navigate('/products')}
        >
           {t("continue shopping")}
        </Button>
      </Box>
    ) : (
      <>
        {data.items.map(item => (
          <Box key={item.productId} display="flex" flexDirection='column' gap={2} mb={2} alignItems="center">
            <Box flex={1}>
              <Typography fontWeight={600}>{item.productName}</Typography>
              <Typography>${item.price}</Typography>
              <Typography>Qty: {item.count}</Typography>
            </Box>
            <Box>
              <Button onClick={() => handleUpdate(item.productId, "-")}>-</Button>
              <Button onClick={() => handleUpdate(item.productId, "+")}>+</Button>
              <IconButton color="error" onClick={() => removeItem(item.productId)}>
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Box>
        ))}

        <Divider sx={{ my: 2 }} />

        <Typography fontWeight={600}>{t("Subtotal")}: ${subtotal?.toFixed(2)}</Typography>
        <Typography component="p" variant="body" fontSize={'70%'} sx={{ color:"text.primary", mb:2 }}>
          {t('Taxes and')} 
          <Link component={Links} to='/products' color='inherit' sx={{
            color: "text.primary",
            "&:hover": { color: "#ce967e", transform: "scale(1.05)", textDecoration: 'underline' },
            cursor: 'pointer', transition: "0.3s"
          }}>
            {t('shipping')}
          </Link>, {t('calculated at checkout')}
        </Typography>

        <Box display={'flex'} gap={2}>
          <Button
            variant="contained"
            sx={{ background:'#ce967e',color:"#fff", "&:hover": { background:'#000', transform: "scale(1.05)" } }}
            onClick={() => navigate('/cart')}
          >
            {t("View CART")}
          </Button>
          <Button
            variant="contained"
            sx={{ background:'#ce967e', color:"#fff","&:hover": { background:'#000', transform: "scale(1.05)" } }}
            onClick={() => navigate('/checkout')}
          >
            {t("checkout")}
          </Button>
        </Box>
      </>
    )}
  </Box>
</Drawer>

  );
}
