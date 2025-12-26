import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ringImage from "../../img/ring_gold.avif";
import { Link } from '@mui/material';
import { Link as Links } from 'react-router-dom';

export default function Cart() {
  const cartItem = {
    title: "The Tepo 18kt Diamond Yellow Gold Ring",
    brand: "FLORIDA DIAMOND",
    price: 250,
    quantity: 2,
    color: "gold",
    image:ringImage
  };

  const total = cartItem.price * cartItem.quantity;

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          height: 220,
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605100804763-247f67b3557e)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Box textAlign="center">
          <Typography variant="h4" fontWeight={600}>
            Your Shopping Cart
          </Typography>
          <Link component={Links}
                      to={`/home`}
                      underline="none"
                      color="inherit"
                      variant="body2" mt={1}>
            Home
          </Link>
        </Box>
      </Box>

      {/* Cart Content */}
      <Container sx={{ mt: 6 }}>
        {/* Header */}
        <Grid container pb={2}>
          
            <Typography fontWeight={600} width={490}>PRODUCT</Typography>
          
          
            <Typography fontWeight={600} width={100} textAlign="center">QUANTITY</Typography>
          
            <Typography fontWeight={600} width={260} textAlign="right">TOTAL</Typography>
          
        </Grid>

        <Divider />

        {/* Item */}
        <Grid container alignItems="center" py={4}>
          <Grid item xs={6} display="flex" gap={2}>
            <img
              src={cartItem.image}
              alt=""
              width={90}
              height={90}
              style={{ objectFit: "cover" }}
            />

            <Box>
              <Typography variant="caption" color="text.secondary">
                {cartItem.brand}
              </Typography>
              <Typography fontWeight={600}>
                {cartItem.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ${cartItem.price.toFixed(2)}
              </Typography>
              <Typography variant="body2">
                Color: {cartItem.color}
              </Typography>
            </Box>
          </Grid>

          {/* Quantity */}
          <Grid item xs={3} ps={5} textAlign="center" width={400}>
            <Box display="flex" justifyContent="center" gap={1}>
              <Button variant="outlined">-</Button>
              <Typography mt={1}>{cartItem.quantity}</Typography>
              <Button variant="outlined">+</Button>
              <IconButton color="error">
                <DeleteOutlineIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Total */}
          <Grid item xs={3} textAlign="right">
            <Typography fontWeight={600} color="primary">
              ${total.toFixed(2)}
            </Typography>
          </Grid>
        </Grid>

        <Divider />

        {/* Summary */}
        <Box mt={6} textAlign="right">
          <Typography fontWeight={600}>
            Subtotal &nbsp;
            <Typography component="span" fontWeight={700}>
              ${total.toFixed(2)} USD
            </Typography>
          </Typography>

          <Typography variant="body2" color="text.secondary" mt={1}>
            Taxes and shipping calculated at checkout
          </Typography>

          <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined">
              Continue Shopping
            </Button>
            <Button variant="contained">
              Checkout
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
