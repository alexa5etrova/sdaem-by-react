import React from "react";
import { useSwiper } from "swiper/react";

import { SwiperButtonProps } from "./SwiperButton.props";
import styles from "./SwiperButton.module.scss";
import ChevronIcon from "../../../assets/icons/ChevronIcon";

const SwiperButton = ({ ...props }: SwiperButtonProps): JSX.Element => {
  const swiper = useSwiper();

  return (
    <div className={styles.btnContainer} {...props}>
      <button onClick={() => swiper.slidePrev()} className={styles.swiperbtn}>
        <ChevronIcon width="30" height="38" className={styles.iconPrev} />
      </button>
      <button onClick={() => swiper.slideNext()} className={styles.swiperbtn}>
        <ChevronIcon width="30" height="38" className={styles.iconNext} />
      </button>
    </div>
  );
};

export default SwiperButton;
