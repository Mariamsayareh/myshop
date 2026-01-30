import { Box, Typography, Button,Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function CardItem({ card }) {
  return (
    <Box
      sx={{
        border: "1px solid #eee",
        borderRadius: 2,
        overflow: "hidden",
        transition: "0.3s",
        "&:hover .readMore": {
          opacity: 1,
          transform: "translateY(0)",
        },
      }}
    >
      <Box
        component="img"
        src={card.img}
        alt={card.title}
        sx={{
          cursor: "pointer",
          width: "100%",
          height: 230,
          objectFit: "cover",
          transition: "transform .6s ease",
                "&:hover": {
                  transform: "scale(1.09)", 
                },
        }}
      />

      <Box p={2}>
        <Button
          component={RouterLink}
          to={card.link}
          className="readMore"
          sx={{
            mt: 1.5,
            
          }}
        >
         <Box display={'flex'} gap={1} flexDirection={'column'}>
        <Typography variant="caption" color="primary.main">
          {card.date}
        </Typography>

        <Typography fontWeight={600} mb={1} sx={{ color:'text.primary',"&:hover": { color: "primary.main" },}}>
          {card.title}
        </Typography>


        <Typography variant="body2" fontWeight={500} color="text.secondary">
          {card.desc}
        </Typography>

        <Link component={Link} to='#' color='inherit' sx={{
            color: "text.primary",
            "&:hover": { color: "#ce967e",  textDecoration: 'none' },
            cursor: 'pointer', transition: "0.3s"
          }}>
            read more
          </Link>
          
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
