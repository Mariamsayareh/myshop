import { Box ,Divider } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import img1 from '../../img/img1.webp';
import img2 from '../../img/img2.webp';
import img3 from '../../img/img3.webp';
import img4 from '../../img/img4.webp';
import img5 from '../../img/img5.webp';


const Section8Home = () => {
    const logos = [
        img1,
        img2,
        img3,
        img4,
        img5
        ];

    return (
     <>
     <Box sx={{ py: 6,pb:4  ,backgroundColor: "background.paper"}} >
       <Divider />
       </Box>
        <Box sx={{ py: 8,px:3  ,backgroundColor: "background.paper"}}>
        <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={60}
            loop
            grabCursor
            autoplay={{
            delay: 5000,
            
            }}
            breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            900: { slidesPerView: 5 },
            }}
        >
            {logos.map((logo, index) => (
            <SwiperSlide key={index}>
                <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0.6,
                    transition: "0.3s",
                    "&:hover": {
                    opacity: 1,
                    },
                }}
                >
                <Box
                    component="img"
                    src={`${logo}`}
                    alt="brand"
                    sx={{
                    
                    height: "auto",
                    objectFit: "contain",
                    }}
                />
                </Box>
            </SwiperSlide>
            ))}
        </Swiper>
        </Box>
    </>
  );
}

export default Section8Home;
