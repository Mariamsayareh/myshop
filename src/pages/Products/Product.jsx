import React from 'react';
import { useParams } from 'react-router-dom';
import UseProduct from '../../Hooks/useProduct';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, Grid, Rating, Typography } from '@mui/material';
import UseAddToCart from '../../Hooks/useAddToCart';
import { useTranslation } from "react-i18next";

const Product = () => {
    const { t, i18n } = useTranslation();
    const {id}=useParams();
    const {data ,isLoading ,isError}=UseProduct(id);
    const {mutate :addToCart ,isPending :isAddingToCart}=UseAddToCart();
    //console.log(data?.response);
    const product = data?.response;
    if(isLoading) return <CircularProgress></CircularProgress>
        if(isError) return <Typography>{t('error')}</Typography>
    return (
        <Box component={'section'} sx={{py:5}}>
            <Card sx={{p:3}}>
                <Grid sx={{display:'flex' ,alignItems:'center'}} container spacing={3}>
                    <Grid item size={{xs:12 ,md:5}}>
                        <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.name}
                            sx={{
                                width: '100%',
                                height: 350,
                                objectFit: 'contain', 
                            }}
                        />

                    </Grid>
                    <Grid item size={{xs:12 ,md:7}} sx={{display:'flex' ,flexDirection:'column' ,gap:2 ,alignItems:'flex-start'}}>
                        <Typography component={'h1'} variant='h3'>
                            {product.name}
                        </Typography>
                        <Typography component={'h3'} variant='span'>
                            ${product.price}
                        </Typography>
                        <Rating value={product.rate} readOnly></Rating>
                        <Typography>
                            {t('Available Quantity')} : {product.quantity}
                        </Typography>
                        <Button variant='contained' sx={{backgroundColor: "#ce967e"}} 
                            onClick={()=>addToCart({ProductId:product.id ,Count:1})}
                            disabled={isAddingToCart}
                        >{t('Add to Cart')}</Button>
                    </Grid>
                </Grid>
                <Box mt={3} px={5}>
                    <Typography component={'h3'} variant='h5' sx={{textDecoration: 'underline'}}>
                            {t('Description')}:
                    </Typography>
                    <Typography >
                        {product.description}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

export default Product;
