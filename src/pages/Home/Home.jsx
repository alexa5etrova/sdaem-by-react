import { useEffect } from "react";
import cn from "classnames";
import Background from "components/Background/Background";

import FlatCarousel from "components/FlatCarousel/FlatCarousel";
import Filter from "components/forms/Filter/Filter";
import HomeArticle from "components/HomeArticle/HomeArticle";
import HomeNewsNav from "components/HomeNewsNav/HomeNewsNav";
import Htag from "components/Htag/Htag";
import Loader from "components/Loader/Loader";
import Offer from "components/Offer/Offer";
import PhotoLink from "components/PhotoLink/PhotoLink";
import SidebarNav from "components/SidebarNav/SidebarNav";
import Total from "components/Total/Total";
import { STATUSES } from "data/admin";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchFlats } from "redux/flatsSlice";


import styles from "./Home.module.scss";


const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlats("/flats?city=minsk"));
  }, [dispatch]);

  const { flats, status, error } = useSelector((state) => state.flats);

  if (status === STATUSES.loading) {
    return <Loader />;
  }
  if (status === STATUSES.rejected) {
    return <p>{error}</p>;
  }
  if (status === STATUSES.resolved)
    return (
      <>
        <div className={styles.container}>
          <Background bgStyle="homeFilter">
            <div className={styles.violetWrapper}>
              <h1 className={styles.h1}>
                Sdaem.by - у нас живут <span>ваши объявления</span>
              </h1>
              <Filter page="home" />
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
            <FlatCarousel flats={flats} />
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
