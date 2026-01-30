import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';
import UseAddToCart from '../../Hooks/useAddToCart';
import CartDrawer from "../../commponrnts/CartDrawer/CartDrawer"; 
import { useTranslation } from "react-i18next";

const ComponentPeoduct = ({ product }) => {
  const { t } = useTranslation();
  const { mutate: addToCart, isPending: isAddingToCart } = UseAddToCart();
  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ProductId: product.id, Count: 1 }, {
      onSuccess: () => setOpenCart(true)
    });
  };
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{px:3}}>
      <Card 
      sx={{
              display: 'flex',        
              flexDirection: 'column',  
              justifyContent: 'center', 
              alignItems: 'center',     
              gap: 2,                   
            }}>
        <Link
          to={`/product/${product.id}`}
          style={{ textDecoration: 'none' }}
        >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ height: 200, objectFit: 'contain' ,mt:2}}
            />
            <CardContent >
              <Typography component="h3">
                {product.name}
              </Typography>
              <Typography component="span" variant="body1">
                ${product.price}
              </Typography>
            </CardContent>
        
        </Link>
        <Button
                variant="contained"
                sx={{ backgroundColor: "#ce967e",m:3 ,px:5 }}
                onClick={() =>
                  handleAddToCart({ ProductId: product.id, Count: 1 })
                }
                
                disabled={isAddingToCart}
              >
                {t('Add to Cart')}
        </Button>
        <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />
      </Card>
    </Grid>
  );
};

export default ComponentPeoduct;
