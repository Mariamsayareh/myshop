import { useProducts } from '../../Hooks/useProducts';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import ComponentPeoduct from './ComponentPeoduct';


export default function ProductsSection() {
  const { t, i18n } = useTranslation();
  const { isLoading, isError, data } = useProducts();

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>{t('error')}</Typography>;

  return (
    <Box p={3}>
      <Typography component="h2" variant="h4" textAlign="center" sx={{ mb: 4 }}>
        {t('Products')}
      </Typography>

      <Grid container spacing={2}>
        {data.response.data.map(product => (
          <ComponentPeoduct key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
  );
}
