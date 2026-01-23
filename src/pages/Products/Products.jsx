import { useProducts } from '../../Hooks/useProducts';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import { useTranslation } from "react-i18next";
import ComponentPeoduct from './ComponentPeoduct';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Products = () => {
  const { t } = useTranslation();
  const {register, handleSubmit} = useForm({
    defaultValues:{
      search:'',
      categoryId:'',
      minPrice:'',
      maxPrice:'',
    }
  })
  const [acitveFilters ,setAcitveFilters]=useState('');
  const { isLoading, isError, data } = useProducts(acitveFilters);
  const applyFilters =(values)=>{
    setAcitveFilters({
      search:values.search || null ,
      categoryId:values.categoryId || null ,
      minPrice:values.minPrice || null ,
      maxPrice:values.maxPrice || null ,
    })
  }

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>{t('error')}</Typography>;

  return (
    <Box p={3}>
      <Box component={'form'} display={'flex'} gap={3}
      onSubmit={handleSubmit(applyFilters)}>
        <TextField
        label={t('Search products')}
       {...register('search')}
      />
      <TextField
        label={t('Category')}
       {...register('categoryId')}
      />
      <TextField
        label={t('Min Price')}
       {...register('minPrice')}
      />
      <TextField
        label={t('Max Price')}
       {...register('maxPrice')}
      />
      <Button type='submit'>Apply Filters</Button>
      </Box>

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
};

export default Products;
