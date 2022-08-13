import { useCallback, useEffect } from "react";
import cn from "classnames";

import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchFlats } from "../../redux/flatsSlice";
import { HomeProps } from "./Home.props";
import Filter from "../../components/forms/Filter/Filter";
import Background from "../../components/Background/Background";
import PhotoLink from "../../components/PhotoLink/PhotoLink";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Htag from "../../components/Htag/Htag";
import Total from "../../components/Total/Total";
import Offer from "../../components/Offer/Offer";
import HomeArticle from "../../components/HomeArticle/HomeArticle";
import HomeNewsNav from "../../components/HomeNewsNav/HomeNewsNav";

import styles from "./Home.module.scss";
import { fetchNews } from "../../redux/newsSlice";

const Home = (props: HomeProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const getData = useCallback(() => {
    dispatch(fetchFlats("/flats"));
    dispatch(fetchNews("/news"));
  }, [dispatch]);
  useEffect(() => {
    getData();
  }, [getData]);

  const { flats, status, error } = useAppSelector((state) => state.flats);
  const { news } = useAppSelector((state) => state.news);

  return (
    <>
      {status === "loading" && <Loader />}
      {status === "rejected" && <p>{error}</p>}
      {status === "resolved" && (
        <div>
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
              <HomeNewsNav news={news} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
