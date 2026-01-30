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
import HeroSec from '../../commponrnts/Hero/HeroSec';

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

  if (isLoading) {
      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '50vh',
            gap: 2
          }}
        >
          <CircularProgress />
          <Typography variant="h6">{t("Loading Product...")}</Typography>
        </Box>
      );
    }
  
    if (isError) {
      return (
        <Typography color="error" textAlign="center">
          {t("Failed to load Product")}
        </Typography>
      );}

  return (
    <>
    <HeroSec pageName={'Products'}/>
    <Box p={3} mt={5}>
      <Box component="form" onSubmit={handleSubmit(applyFilters)} mb={5}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} sx={{ width: { xs: "100%", md: "auto" } }}>
            <TextField
              fullWidth
              label={t("Search products")}
              {...register("search")}
            />
          </Grid>

          <Grid item xs={12} md={3} sx={{ width: { xs: "100%", md: "auto" } }}>
            <TextField
              fullWidth
              label={t("Category")}
              {...register("categoryId")}
            />
          </Grid>

          <Grid item xs={12} md={3} sx={{ width: { xs: "100%", md: "auto" } }}>
            <TextField
              fullWidth
              label={t("Min Price")}
              {...register("minPrice")}
            />
          </Grid>

          <Grid item xs={12} md={3} sx={{ width: { xs: "100%", md: "auto" } }}>
            <TextField
              fullWidth
              label={t("Max Price")}
              {...register("maxPrice")}
            />
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" py={8}>
              {t("Apply Filters")}
            </Button>
          </Grid>
        </Grid>
      </Box>


      

      <Grid container spacing={2}>
        {data.response.data.map(product => (
          <ComponentPeoduct key={product.id} product={product} />
        ))}
      </Grid>
    </Box>
    </>
  );
};

export default Products;
