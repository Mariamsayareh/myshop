import { useProducts } from '../../Hooks/useProducts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';

export default function Products() {
    const { isLoading, isError, data } = useProducts();
    console.log(data);
    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>error</Typography>
    
    return (
        <Box p={3}>
            <Typography component={'h2'} variant='h4'  textAlign="center" sx={{ mb: 4 }}>Products</Typography>
            <Grid container spacing={2}>
                {data.response.data.map((product) =>
                    <Grid item size={{ xs: 12, sm:6, md:5, lg:3 }}>
                        <Card>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.title}
                                sx={{height:200, objectFit:"contain"}}
                            />
                            <CardContent>
                                <Typography component={'h3'}>{product.name}</Typography>
                                <Typography component={'span'} variant='body1'>
                                    {product.price}$
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
