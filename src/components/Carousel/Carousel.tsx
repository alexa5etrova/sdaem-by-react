import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { CarouselProps } from "./Carousel.props";

import FlatCard from "../FlatCard/FlatCard";
import CarouselFilter from "../forms/CarouselFilter/CarouselFilter";
import SwiperButton from "./SwiperButton/SwiperButton";

import styles from "./Carousel.module.scss";
import "swiper/css";

const Carousel = ({ flats }: CarouselProps): JSX.Element => {
  const [metro, setMetro] = useState<string>("");
  const [district, setDistrict] = useState<string>("");

  const updFlats = flats.filter(function (item) {
    if (metro !== "" && district === "") {
      return item.metro.includes(metro);
    } else if (district !== "" && metro === "") {
      return item.district.includes(district);
    } else return item;
  });

  return (
    <div className={styles.carousel}>
      <CarouselFilter setDistrict={setDistrict} setMetro={setMetro} />
      <Swiper slidesPerView={3} spaceBetween={30} loop={true}>
        {updFlats.length > 0 ? (
          updFlats.map((item) => (
            <SwiperSlide key={item.id}>
              <FlatCard flat={item} page="home" />
            </SwiperSlide>
          ))
        ) : (
          <p>Нет квартир по заданному местоположению</p>
        )}
        <SwiperButton />
      </Swiper>
    </div>
  );
};

export default Carousel;
