import { Drawer, Box, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

export default function CartDrawer({ open, onClose }) {
  const navigate = useNavigate();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 3 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        <Typography sx={{ mt: 3 }}>Product Example</Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => {
              onClose();
              navigate("/cart");
            }}
          >
            View Cart
          </Button>

          <Button fullWidth variant="contained" sx={{ mt: 2 }}>
            Checkout
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
