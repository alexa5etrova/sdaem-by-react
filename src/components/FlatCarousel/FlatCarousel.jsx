// Import Swiper React components
import { useState } from "react";

// Import Swiper styles
import CarouselFilter from "components/forms/CarouselFilter/CarouselFilter";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";


import HomeFlatCard from "../FlatCard/HomeFlatCard/HomeFlatCard";
import styles from "./FlatCarousel.module.scss";
import { SwiperButton } from "./SwiperButton/SwiperButton";


const FlatCarousel = ({ flats }) => {
  const [metro, setMetro] = useState("");
  const [district, setDistrict] = useState("");

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
              <HomeFlatCard flat={item} page="home" />
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

export default FlatCarousel;
