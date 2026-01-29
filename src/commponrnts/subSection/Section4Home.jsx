
import { Box, Typography, Button } from "@mui/material";

import cms from "../../img/cms3.webp";

export default function Section4Home() {
  
  return (
    <Box
      sx={{
        px:6,
        py:8,
        backgroundImage: `url(${cms})`,
        backgroundSize: "100% 100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end"
      }}
    >


      {/* النصوص */}
      <Box color="#000" display={'flex'} flexDirection={'column'} justifyContent={"flex-end"} width={585}  gap={4}>
       <Box  display={'flex'} flexDirection={'column'} justifyContent={"flex-end"} gap={4}>
        <Typography variant="spam" fontWeight={400} pt={8}>
          THIS WEEK’S HIGHLIGHTS
        </Typography>
        <Typography variant="h4" fontWeight={500} x={{ width: { xs: "45%", md: "100%" }}}>
          Drop Cut Blue Necklace With Earrings Set Shop Now
        </Typography>
      </Box> 
      <Box>
        <Button variant="contained"
                  sx={{
                    mb:8,
                    px: 4,
                    backgroundColor: "#CE967E",
                    "&:hover": { backgroundColor: "#000000" },
                    color: "#fff" 
                  }}>
                    shop now
        </Button>
      </Box>
      </Box>
      
    </Box>
  );
}
