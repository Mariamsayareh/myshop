import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Button
} from "@mui/material";
import { useCategory } from '../../Hooks/useCategory';
import { useTranslation } from "react-i18next";

const Categorie = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { data, isLoading, isError } = useCategory(id);

  if (isLoading) return <CircularProgress />;

  if (isError)
    return <Typography color="error">{t("Failed to load products")}</Typography>;

  // حالة لما ما في منتجات
  if (!data.response || data.response.length === 0) {
    return (
      <Box p={3} textAlign="center">
        <Typography variant="h5" mb={2}>
          {t("No products available in the selected category")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={RouterLink}
          to="/"
        >
          {t("Go back to Home")}
        </Button>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" mb={4}>
        {t("Products")}
      </Typography>

      <Grid container spacing={3}>
        {data.response.map(product => (
          <Grid key={product.id} xs={12} sm={6} md={4}>
            <RouterLink to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "0.3s",
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 6
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: 'cover' }}
                />

                <CardContent>
                  <Typography fontWeight={600} gutterBottom>
                    {product.name}
                  </Typography>
                  <Box display="flex" alignItems="center" gap={1} mb={1}>
                    <Rating
                      value={product.rate}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      ({product.rate})
                    </Typography>
                  </Box>
                  <Typography fontWeight={700} color="primary">
                    ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </RouterLink>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Categorie;
