// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import FlatCard from "../FlatCard/FlatCard";
import { SwiperButton } from "./SwiperButton/SwiperButton";

const Carousel = ({ flats }) => {
  return (
    <Swiper slidesPerView={3} spaceBetween={30} loop={true}>
      {flats.map((item) => (
        <SwiperSlide key={item.id}>
          <FlatCard flat={item} />
        </SwiperSlide>
      ))}
      <SwiperButton />
    </Swiper>
  );
};

export default Carousel;
