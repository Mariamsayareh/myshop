import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';

const ComponentPeoduct = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{px:3}}>
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: 'none' }}
      >
        <Card>
          <CardMedia
            component="img"
            image={product.image}
            alt={product.name}
            sx={{ height: 200, objectFit: 'contain' ,mt:2}}
          />
          <CardContent>
            <Typography component="h3">
              {product.name}
            </Typography>
            <Typography component="span" variant="body1">
              ${product.price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default ComponentPeoduct;
