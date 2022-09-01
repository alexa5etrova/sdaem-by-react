import { useSwiper } from "swiper/react";
import { ReactComponent as ChevronIcon } from "./chevron.svg";
import styles from "./SwiperButton.module.scss";

export const SwiperButton = () => {
  const swiper = useSwiper();

  return (
    <div className={styles.btnContainer}>
      <button onClick={() => swiper.slidePrev()} className={styles.swiperbtn}>
        <ChevronIcon width="30" height="38" className={styles.iconPrev} />
      </button>
      <button onClick={() => swiper.slideNext()} className={styles.swiperbtn}>
        <ChevronIcon width="30" height="38" className={styles.iconNext} />
      </button>
    </div>
  );
};
