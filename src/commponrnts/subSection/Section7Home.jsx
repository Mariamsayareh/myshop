import {
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardItem from "../../pages/Card/CardItem";
import { cards } from "../../pages/Card/Cards";
import { useTranslation } from "react-i18next";

export default function Section7Home() {
  const { t ,i18n} = useTranslation();
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "background.paper", }}>
      
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={600}>
          {t("Our Latest Blog")}
        </Typography>
        <Typography color="text.secondary" mt={1}>
          {t("There are many variations of passages of lorem Ipsum available")}
        </Typography>
      </Box>
    <Swiper
      spaceBetween={24}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      style={{
                "--swiper-pagination-color": "#ce967e",
                "--swiper-pagination-bullet-inactive-color": "#cfcfcf"
                }}
      modules={[Navigation, Pagination]}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      
    >
      {cards.map((card) => (
        <SwiperSlide  key={card.id}>
          <CardItem card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
    
    </Box>
    
  );
}
