import React from "react";
import { Box, Typography, Card, Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import pers1 from "../../img/pers1.webp";
import pers2 from "../../img/pers2.webp";
import pers3 from "../../img/pers3.webp";
import pers4 from "../../img/pers4.webp";

import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";



const Section5Home = () => {
  const { t ,i18n} = useTranslation();
  const testimonials = [
  {
    title: t("Reliable product, consistently delivers."),
    desc:
      t("Lorem Ipsum is simply dummy text of the printing and typesetting industry."),
    name: t("Stefanie Rashford"),
    role: t("Founder"),
    image: `${pers1}`
  },
  {
    title: "Excellent product, A+ customer service.",
    desc:
      t("Lorem Ipsum many variations of passages available but the have alteration."),
    name: t("Augusta Wind"),
    role: t("Web Designer"),
    image: `${pers2}`
  },
  {
    title: t("Impressive quality, durable and reliable."),
    desc:
      t("There are many variations of passages of lorem ipsum more available."),
    name: t("Reema Ghurde"),
    role: t("Manager"),
    image: `${pers3}`
  },
  {
    title: t("Excellent product, worth every penny."),
    desc:
      t("Generation many variations of passages of even believable lorem Ipsum is simply."),
    name: t("Luies Charls"),
    role: t("CEO"),
    image: `${pers4}`
  }
];
    
  return (
    <Box component="section" sx={{ py: 8, backgroundColor: "background.paper", }}>
      
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight={600}>
          {t("What Our Clients Say")}
        </Typography>
        <Typography color="text.secondary" mt={1}>
          {t("There are many variations of passages of lorem Ipsum available")}
        </Typography>
      </Box>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        grabCursor={true}
        pagination={{ clickable: true }}
        
        style={{
                "--swiper-pagination-color": "#ce967e",
                "--swiper-pagination-bullet-inactive-color": "#cfcfcf"
                }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
          1200: {
            slidesPerView: 3
          }
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide   key={index}>
            <Card
              sx={{
                mb:5,
                p: 4,
                height: "100%",
                borderRadius: 2,
                boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
                backgroundColor: "background.default"
              }}
            >
              <Typography fontWeight={600} mb={2}>
                “{item.title}”
              </Typography>

              <Typography color="text.secondary" mb={4}>
                {item.desc}
              </Typography>

              <Box display="flex" alignItems="center" gap={2}>
                <Avatar
                  src={item.image}
                  sx={{ width: 52, height: 52 }}
                />

                <Box>
                  <Typography fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.role}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Section5Home;
