import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardItem from "../../pages/Card/CardItem";
import { cards } from "../../pages/Card/Cards";

export default function Section7Home() {
  return (
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
  );
}
