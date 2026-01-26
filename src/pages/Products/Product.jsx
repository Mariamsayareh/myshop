import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardMedia,
  CircularProgress,
  Grid,
  Rating,
  Typography,
  TextField,
  Alert,
  Avatar,
  Divider
} from '@mui/material';

import UseProduct from '../../Hooks/useProduct';
import UseAddToCart from '../../Hooks/useAddToCart';
import useAddReview from '../../Hooks/useReviews';
import { useTranslation } from "react-i18next";
import CartDrawer from "../../commponrnts/CartDrawer/CartDrawer"; 

const Product = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const { data, isLoading, isError } = UseProduct(id);
  const { mutate: addToCart, isPending: isAddingToCart } = UseAddToCart();
  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({ ProductId: product.id, Count: 1 }, {
      onSuccess: () => setOpenCart(true)
    });
  };
  const {
    mutate: addReview,
    isPending: isAddingReview,
    isSuccess,
    isError: isReviewError,
    error
  } = useAddReview(id);

  const product = data?.response;

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  if (isLoading) return <CircularProgress />;
  if (isError) return <Typography>{t('error')}</Typography>;

  const handleSubmitReview = () => {
    addReview(
      { Rating: rating, Comment: comment },
      {
        onSuccess: () => {
          setShowReviewForm(false);
          setRating(0);
          setComment("");
        }
      }
    );
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });

  return (
    <Box component="section" sx={{ py: 5 }}>
      <Card sx={{ p: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: '100%',
                height: 350,
                objectFit: 'contain'
              }}
            />
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Typography variant="h3">{product.name}</Typography>
            <Typography variant="h5">${product.price}</Typography>

            <Rating value={product.rate} readOnly />

            <Typography>
              {t('Available Quantity')} : {product.quantity}
            </Typography>

            <Button
              variant="contained"
              sx={{ backgroundColor: "#ce967e" }}
              onClick={() =>
                handleAddToCart({ ProductId: product.id, Count: 1 })
              }
              
              disabled={isAddingToCart}
            >
              {t('Add to Cart')}
            </Button>
            <CartDrawer open={openCart} onClose={() => setOpenCart(false)} />

            <Button
              variant="outlined"
              onClick={() => setShowReviewForm(prev => !prev)}
            >
              {t('Add Review')}
            </Button>
          </Grid>
        </Grid>
        <Box mt={4}>
          <Typography variant="h5" sx={{ textDecoration: 'underline' }}>
            {t('Description')}
          </Typography>
          <Typography mt={1}>{product.description}</Typography>
        </Box>
        {/* Add Review Form */}
        {showReviewForm && (
          <Box mt={5}>
            <Typography variant="h6">
              {t('Add your review')}
            </Typography>

            <Rating
              value={rating}
              onChange={(e, newValue) => setRating(newValue)}
            />

            <TextField
              fullWidth
              multiline
              rows={3}
              sx={{ mt: 2 }}
              placeholder={t('Write your comment')}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />

            <Button
              variant="contained"
              sx={{ mt: 2 }}
              disabled={isAddingReview || rating === 0}
              onClick={handleSubmitReview}
            >
              {t('Submit Review')}
            </Button>

            {isSuccess && (
              <Alert severity="success" sx={{ mt: 2 }}>
                {r("Review added successfully")}
              </Alert>
            )}

            {isReviewError && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {error?.response?.data?.message ||
                  t("You already reviewed this product")}
              </Alert>
            )}
          </Box>
        )}

        {/* Reviews List */}
        <Box mt={6}>
          <Typography variant="h5" mb={2} sx={{ textDecoration: 'underline' }}>
            {t('Customer Reviews')}
          </Typography>

          {product.reviews.length === 0 ? (
            <Typography color="text.secondary">
              {t("No reviews yet")}
            </Typography>
          ) : (
            product.reviews.map((review, index) => (
              <Card
                key={index}
                sx={{
                  p: 2,
                  mb: 2,
                  borderRadius: 2,
                  boxShadow: 1
                }}
              >
                <Box display="flex" alignItems="center" gap={2}>
                  <Avatar sx={{ bgcolor: "#ce967e" }}>
                    {review.userName.charAt(0).toUpperCase()}
                  </Avatar>

                  <Box flex={1}>
                    <Typography fontWeight={600}>
                      {review.userName}
                    </Typography>

                    <Rating
                      value={review.rating}
                      readOnly
                      size="small"
                    />

                    <Typography variant="caption" color="text.secondary">
                      {formatDate(review.createdAt)}
                    </Typography>
                  </Box>
                </Box>

                <Divider sx={{ my: 1 }} />

                <Typography variant="body2">
                  {review.comment}
                </Typography>
              </Card>
            ))
          )}
        </Box>

      </Card>
    </Box>
  );
};

export default Product;
