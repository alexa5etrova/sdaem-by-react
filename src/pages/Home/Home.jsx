import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { fetchFlats } from "./../../redux/flatsSlice";
import Filter from "../../components/forms/Filter/Filter";
import Background from "./../../components/Background/Background";
import PhotoLink from "./../../components/PhotoLink/PhotoLink";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Loader from "./../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Htag from "./../../components/Htag/Htag";
import Total from "./../../components/Total/Total";
import Offer from "./../../components/Offer/Offer";
import HomeArticle from "../../components/HomeArticle/HomeArticle";
import HomeNewsNav from "./../../components/HomeNewsNav/HomeNewsNav";

import styles from "./Home.module.scss";

const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlats("/flats?city=minsk"));
  }, [dispatch]);

  const { flats, status, error } = useSelector((state) => state.flats);

  if (status === "loading") {
    return <Loader />;
  }
  if (status === "rejected") {
    return <p>{error}</p>;
  }
  if (status === "resolved")
    return (
      <>
        <div className={styles.container}>
          <Background bgStyle="homeFilter">
            <div className={styles.violetWrapper}>
              <h1 className={styles.h1}>
                Sdaem.by - у нас живут <span>ваши объявления</span>
              </h1>
              <Filter />
            </div>
          </Background>
          <div className={styles.catalogueWrapper}>
            <PhotoLink />
            <SidebarNav />
          </div>
          <div className={cn(styles.headerWrapper, styles.dotsLeft)}>
            <Htag tag="homeVioletBigger">Квартиры на сутки</Htag>
            <Htag tag="h2">Аренда квартир в Минске</Htag>
          </div>
          <div className={styles.carousel}>
            <Carousel flats={flats} />
            <Total total={flats.length} />
          </div>
        </div>
        <Offer />
        <div className={styles.container}>
          <div className={cn(styles.headerWrapper, styles.dotsRight)}>
            <Htag tag="homeVioletBigger">ЧТО ТАКОЕ SDAEM.BY</Htag>
            <Htag tag="h2">Квартира на сутки в Минске</Htag>
          </div>
          <div className={styles.news}>
            <HomeArticle />
            <HomeNewsNav />
          </div>
        </div>
      </>
    );
};

export default Home;
