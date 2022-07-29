import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchFlats } from "./../../redux/flatsSlice";
import Filter from "../../components/Filter/Filter";
import Background from "./../../components/Background/Background";
import PhotoLink from "./../../components/PhotoLink/PhotoLink";
import SidebarNav from "../../components/SidebarNav/SidebarNav";
import Loader from "./../../components/Loader/Loader";
import Carousel from "../../components/Carousel/Carousel";
import Htag from "./../../components/Htag/Htag";

import styles from "./Home.module.scss";
const Home = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlats("flats?city=minsk"));
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
      <div className={styles.container}>
        <Background bgStyle="homeFilter">
          <div className={styles.violetWrapper}>
            <Htag tag="h1home">Sdaem.by - у нас живут ваши объявления</Htag>
            <Filter />
          </div>
        </Background>
        <div className={styles.catalogueWrapper}>
          <PhotoLink />
          <SidebarNav />
        </div>
        <div className={styles.headerWrapper}>
          <Htag tag="homeVioletBigger">Квартиры на сутки</Htag>
          <Htag tag="h2">Аренда квартир в Минске</Htag>
        </div>
        <div className={styles.carousel}>
          <Carousel flats={flats} />
        </div>
      </div>
    );
};

export default Home;
