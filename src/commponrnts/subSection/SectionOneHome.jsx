import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import services1 from "../../img/services1.webp";
import services2 from "../../img/services2.webp";
import services3 from "../../img/services3.webp";
import services4 from "../../img/services4.webp";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// Swiper modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const SectionOneHome = () => {
  return (
    <Box my={4} display={'flex'}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode
        scrollbar={{ draggable: true }}
        mousewheel={{ forceToAxis: true }}
        modules={[FreeMode, Scrollbar, Mousewheel]}
        style={{ paddingBottom: "25px" }}
      >
        {/* Item 1 */}
        <SwiperSlide style={{ width: "260px" }}>
          <Box
            display="flex"
            gap={4}
            alignItems="center"
            sx={{
              "&:hover img": {
                transform: "translateY(-50%)",
              },
            }}
          >
            <Box
              sx={{
                height: 50,
                overflow: "hidden",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <img
                src={services1}
                alt="Worldwide Shipping"
                style={{ width: "100%", height: "200%", objectFit: "cover" }}
              />
            </Box>

            <Box>
              <Typography fontWeight={500} fontSize={15}>
                Worldwide Shipping
              </Typography>
              <Typography color="text.secondary" mt={1} fontSize={10}>
                For all Orders Over $100
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        {/* Item 2 */}
        <SwiperSlide style={{ width: "260px" }}>
          <Box
            display="flex"
            gap={4}
            alignItems="center"
            sx={{
              "&:hover img": {
                transform: "translateY(-50%)",
              },
            }}
          >
            <Box
              sx={{
                height: 50,
                overflow: "hidden",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <img
                src={services2}
                alt="Money Back Guarantee"
                style={{ width: "100%", height: "200%", objectFit: "cover" }}
              />
            </Box>

            <Box>
              <Typography fontWeight={500} fontSize={15}>
                Money Back Guarantee
              </Typography>
              <Typography color="text.secondary" mt={1} fontSize={10}>
                Guarantee Within 30 Days
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        {/* Item 3 */}
        <SwiperSlide style={{ width: "260px" }}>
          <Box
            display="flex"
            gap={4}
            alignItems="center"
            sx={{
              "&:hover img": {
                transform: "translateY(-50%)",
              },
            }}
          >
            <Box
              sx={{
                height: 50,
                overflow: "hidden",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <img
                src={services3}
                alt="Offers And Discounts"
                style={{ width: "100%", height: "200%", objectFit: "cover" }}
              />
            </Box>

            <Box>
              <Typography fontWeight={500} fontSize={15}>
                Offers And Discounts
              </Typography>
              <Typography color="text.secondary" mt={1} fontSize={10}>
                Back Returns In 7 Days
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>

        {/* Item 4 */}
        <SwiperSlide style={{ width: "260px" }}>
          <Box
            display="flex"
            gap={4}
            alignItems="center"
            sx={{
              "&:hover img": {
                transform: "translateY(-50%)",
              },
            }}
          >
            <Box
              sx={{
                height: 50,
                overflow: "hidden",
                cursor: "pointer",
                "& img": {
                  transition: "transform 0.5s ease",
                },
              }}
            >
              <img
                src={services4}
                alt="24/7 Support"
                style={{ width: "100%", height: "200%", objectFit: "cover" }}
              />
            </Box>

            <Box>
              <Typography fontWeight={500} fontSize={15}>
                24/7 Support Services
              </Typography>
              <Typography color="text.secondary" mt={1} fontSize={10}>
                Contact us Anytime
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default SectionOneHome;
