import React, { useState, useEffect } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import hero1 from "../../img/heroh1.webp";
import hero2 from "../../img/heroh2.webp";
const heroImages = [hero1, hero2];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <Box
      sx={{
        px:6,
        py:8,
        backgroundImage: `url(${heroImages[currentImage]})`,
        backgroundSize: "100% 100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* :) أسهم التنقل */}
      <IconButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          left: 10,
          color: "white",
          backgroundColor: "rgb(246, 240, 240)",
          "&:hover": { backgroundColor: "#CE967E" }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          right: 10,
          color: "white",
          backgroundColor: "rgb(246, 240, 240)",
          "&:hover": { backgroundColor: "#CE967E" }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>

      {/* النصوص */}
      <Box display={'flex'} flexDirection={'column'} gap={4}>
      {currentImage==1?
      <Box color="#000" display={'flex'} flexDirection={'column'} gap={4}>
        <Typography variant="spam" fontWeight={400} pt={8}>
          THIS WEEK’S HIGHLIGHTS
        </Typography>
        <Typography variant="h4" fontWeight={500} x={{ width: { xs: "45%", md: "100%" }}}>
          Woman In Golden Rings And Necklaces 
        </Typography>
      </Box>
         :
      <Box  color="#000" display={'flex'} flexDirection={'column'} gap={4}>
        <Typography variant="spam" fontWeight={400} pt={8}>
          Rubans 925 Sterling
        </Typography>
        <Typography variant="h4" fontWeight={500} sx={{ width: { xs: "45%", md: "100%" }}}>
          Rubans Modern Minimal Ring Hoop Earrings
        </Typography>
      </Box>}
      <Box>
        <Typography component={'p'} variant="spam" pb={4 } color="#000">
            Awesome products for the dynamic urban lifestyle
        </Typography>
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
