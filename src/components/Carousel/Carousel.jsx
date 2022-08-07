// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import HomeFlatCard from "../FlatCard/HomeFlatCard/HomeFlatCard";
import { SwiperButton } from "./SwiperButton/SwiperButton";
import CarouselFilter from "../forms/CarouselFilter/CarouselFilter";
import styles from "./Carousel.module.scss";
import { useState } from "react";

const Carousel = ({ flats }) => {
  const [metro, setMetro] = useState("");
  const [district, setDistrict] = useState("");
  console.log(metro);

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

export default Carousel;
