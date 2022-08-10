import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper";
import { CardSliderProps } from "./CardSlider.props";

import styles from "./CardSlider.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CardSlider = ({ photoes }: CardSliderProps): JSX.Element => {
  return (
    <Swiper
      loop={true}
      modules={[Pagination, Navigation]}
      className={styles.container}
      pagination={true}
      navigation={true}
    >
      {photoes.map((photo) => (
        <SwiperSlide key={photo.id}>
          <img src={photo.src} alt={photo.alt} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CardSlider;
