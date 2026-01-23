import React, { useState } from 'react';
import UseCart from '../../Hooks/useCart';
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
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@mui/material";
import { useTranslation } from "react-i18next";
import useCheckout from '../../Hooks/useCheckout';

const Checkout = () => {
  const { t } = useTranslation();

  const [paymentMethod, setPaymentMethod] = useState('cash');

  const {
    mutate: checkout,
    isPending: isCheckoutPending,
    isError: isCheckoutError
  } = useCheckout();

  const { data, isLoading, isError } = UseCart();

  const handleCheckout = () => {
    checkout({ paymentMethod });
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
            </TableRow>
          </TableHead>

          <TableBody>
            {data.items.map(item => (
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell>{item.count}</TableCell>
                <TableCell>${item.totalPrice}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={4} align="right">
                {t('Cart Total')} : ${data.cartTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <FormControl fullWidth sx={{ maxWidth: 500, mt: 4 }}>
        <InputLabel id="payment-method-label">
          {t('Payment Method')}
        </InputLabel>
        <Select
          labelId="payment-method-label"
          value={paymentMethod}
          label={t('Payment Method')}
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="visa">Visa</MenuItem>
        </Select>
      </FormControl>

      <Box mt={3}>
        <Button
          variant="contained"
          color="success"
          onClick={handleCheckout}
          disabled={isCheckoutPending}
        >
          {isCheckoutPending ? 'Processing...' : 'Pay Now'}
        </Button>
      </Box>

      {isCheckoutError && (
        <Typography color="error" mt={2}>
          {t('Checkout failed')}
        </Typography>
      )}
    </Box>
  );
};

export default Checkout;