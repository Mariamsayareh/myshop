import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton,
  Button,
  Divider,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Table,
  CircularProgress
} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from "react-i18next";
import useCart from "../../Hooks/useCart.js";
import useRemoveItmeCart from "../../Hooks/useRemoveItmeCart.js";
import useUpdateCaet from "../../Hooks/useUpdateCaet.js";

export default function Cart() {
  const { t, i18n } = useTranslation();
  const {data,isLoading,isError}=useCart();
  const {mutate:reomveItme,isPending}=useRemoveItmeCart();
  const {mutate:updateItme,isPending:updateItmePending}=useUpdateCaet();
  const handleUpdate=(productId,action)=>{
    const item =data.items.find(i=>i.productId==productId);
    if(action=='-'){
      updateItme({productId,count:item.count-1});
    }else{
      updateItme({productId,count:item.count+1});
    }
  }
  //console.log(data);
  if(isLoading) return <CircularProgress></CircularProgress>
  if(isError) return <Typography>{t('error')}</Typography>

  return (
    <Box component='section' sx={{py:5}}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableCell>
              {t('Product name')}
            </TableCell>
            <TableCell>
             {t('Price')}
            </TableCell>
            <TableCell>
              {t('Quantity')}
            </TableCell>
            <TableCell>
              {t('Total')}
            </TableCell>
            <TableCell>
              {t('Action')}
            </TableCell>
          </TableHead>
          <TableBody>
            {data.items.map(item=>(
              <TableRow key={item.productId}>
                <TableCell>{item.productName}</TableCell>
                <TableCell>${item.price}</TableCell>
                <TableCell sx={{display:"flex",alignItems:"center",gap:2}}>
                  <Box sx={{border:"1px solid #ddd"}}>
                  <IconButton onClick={()=>handleUpdate(item.productId,'-')}>
                    <RemoveIcon/>
                  </IconButton>
                  </Box>
                  <Typography component={'span'}>
                    {item.count}
                  </Typography>
                  
                  <Box sx={{border:"1px solid #ddd"}}>
                  <IconButton onClick={()=>handleUpdate(item.productId,'+')}>
                    <AddIcon/>
                  </IconButton>
                  </Box>
                </TableCell>
                <TableCell>{item.totalPrice}</TableCell>
                <TableCell><Button color="error" variant="contained"
                 onClick={()=>reomveItme(item.productId)}
                 disabled={isPending}
                >{t('REMOVE')}</Button></TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} align="right">
                {t('Cart Total')} :${data.cartTotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    // <Box>
    //   {/* Hero */}
    //   <Box
    //     sx={{
    //       height: 220,
    //       backgroundImage:
    //         "url(https://images.unsplash.com/photo-1605100804763-247f67b3557e)",
    //       backgroundSize: "cover",
    //       backgroundPosition: "center",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center"
    //     }}
    //   >
    //     <Box textAlign="center">
    //       <Typography variant="h4" fontWeight={600}>
    //         Your Shopping Cart
    //       </Typography>
    //       <Link component={Links}
    //                   to={`/home`}
    //                   underline="none"
    //                   color="inherit"
    //                   variant="body2" mt={1}>
    //         Home
    //       </Link>
    //     </Box>
    //   </Box>

    //   {/* Cart Content */}
    //   <Container sx={{ mt: 6 }}>
    //     {/* Header */}
    //     <Grid container pb={2}>
          
    //         <Typography fontWeight={600} width={490}>PRODUCT</Typography>
          
          
    //         <Typography fontWeight={600} width={100} textAlign="center">QUANTITY</Typography>
          
    //         <Typography fontWeight={600} width={260} textAlign="right">TOTAL</Typography>
          
    //     </Grid>

    //     <Divider />

    //     {/* Item */}
    //     <Grid container alignItems="center" py={4}>
    //       <Grid item xs={6} display="flex" gap={2}>
    //         <img
    //           src={cartItem.image}
    //           alt=""
    //           width={90}
    //           height={90}
    //           style={{ objectFit: "cover" }}
    //         />

    //         <Box>
    //           <Typography variant="caption" color="text.secondary">
    //             {cartItem.brand}
    //           </Typography>
    //           <Typography fontWeight={600}>
    //             {cartItem.title}
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             ${cartItem.price.toFixed(2)}
    //           </Typography>
    //           <Typography variant="body2">
    //             Color: {cartItem.color}
    //           </Typography>
    //         </Box>
    //       </Grid>

    //       {/* Quantity */}
    //       <Grid item xs={3} ps={5} textAlign="center" width={400}>
    //         <Box display="flex" justifyContent="center" gap={1}>
    //           <Button variant="outlined">-</Button>
    //           <Typography mt={1}>{cartItem.quantity}</Typography>
    //           <Button variant="outlined">+</Button>
    //           <IconButton color="error">
    //             <DeleteOutlineIcon />
    //           </IconButton>
    //         </Box>
    //       </Grid>

    //       {/* Total */}
    //       <Grid item xs={3} textAlign="right">
    //         <Typography fontWeight={600} color="primary">
    //           ${total.toFixed(2)}
    //         </Typography>
    //       </Grid>
    //     </Grid>

    //     <Divider />

    //     {/* Summary */}
    //     <Box mt={6} textAlign="right">
    //       <Typography fontWeight={600}>
    //         Subtotal &nbsp;
    //         <Typography component="span" fontWeight={700}>
    //           ${total.toFixed(2)} USD
    //         </Typography>
    //       </Typography>

    //       <Typography variant="body2" color="text.secondary" mt={1}>
    //         Taxes and shipping calculated at checkout
    //       </Typography>

    //       <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
    //         <Button variant="outlined">
    //           Continue Shopping
    //         </Button>
    //         <Button variant="contained">
    //           Checkout
    //         </Button>
    //       </Box>
    //     </Box>
    //   </Container>
    // </Box>
  );
}
