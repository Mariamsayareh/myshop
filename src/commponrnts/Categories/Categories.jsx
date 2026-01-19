import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Container,
  CircularProgress
} from "@mui/material";
import { Link } from 'react-router-dom';
import { useCategories } from '../../Hooks/useCategories';

const Categories = () => {
  const { isLoading, isError, data } = useCategories();

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
        <Typography variant="h6">Loading Categories...</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Typography color="error" textAlign="center">
        Failed to load categories
      </Typography>
    );
  }

  return (
    <Box p={3} sx={{ backgroundColor: '#f9f9f9' }}>
      <Typography component="h2" variant="h4" textAlign="center" sx={{ mb: 4 }}>
        Categories
      </Typography>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {data.response.map(category => (
            <Grid
              key={category.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            >
              <Link
                to={`/products/${category.id}`}
                style={{ textDecoration: 'none' }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 3,
                    transition: '0.3s',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
