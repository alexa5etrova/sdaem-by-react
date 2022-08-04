import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";

import FlatCard from "./../../components/FlatCard/FlatCard";
import Htag from "../../components/Htag/Htag";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { CRUMBS } from "./../../data/nav";
import Loader from "../../components/Loader/Loader";
import { fetchFlats } from "./../../redux/flatsSlice";

import styles from "./Flats.module.scss";
import { FLATS_PER_PAGE } from "../../data/flats";
import { useLocation } from "react-router-dom";
import ToMap from "../../components/ToMap/ToMap";

const Flats = (props) => {
  const request = useLocation();
  console.log(request);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFlats(`/flats${request.search}`));
  }, [dispatch, request]);

  const { flats, status, error } = useSelector((state) => state.flats);
  const [firstContentIndex, setFirstContentIndex] = useState();
  const [lastContentIndex, setLastContentIndex] = useState();
  const [view, setView] = useState("tile");

  //функции для постраничного вывода, передаем их в props компонента Pagination
  const getFirstIndex = (i) => {
    setFirstContentIndex(i);
  };
  const getLastIndex = (i) => {
    setLastContentIndex(i);
  };

  // реализация поиска - значения для  переменной search приходят из компонента Search
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "rejected") {
    return <p>{error}</p>;
  }
  if (status === "resolved") {
    const filteredFlats = flats.filter(function (item) {
      return item;
    });

    return (
      <>
        <div className={styles.pageContainer}>
          <nav className={styles.crumbsContainer}>
            <Breadcrumbs crumbs={CRUMBS.news} />
          </nav>

          <Htag tag="h1">Квартиры</Htag>
          <div className={cn(styles.flatsContainer, { [styles.list]: view === "list" })}>
            {status === "resolved" && filteredFlats.length === 0 ? (
              <p>Нет статей соответсвующих поиску</p>
            ) : null}
            {status === "resolved" &&
              filteredFlats.slice(firstContentIndex, lastContentIndex).map(function (item) {
                return <FlatCard key={item.id} flat={item} view={view} />;
              })}
          </div>
          <div className={styles.paginationContainer}>
            <Pagination
              data={filteredFlats}
              sendFirstIndex={getFirstIndex}
              sendLastIndex={getLastIndex}
              contentPerPage={FLATS_PER_PAGE[view]}
            />
          </div>
        </div>
        <ToMap
          page="flats"
          header="Показать найденные квартиры на карте"
          body="Ищите новостройки рядом с работой, парком или родственниками"
        />
      </>
    );
  }
};

export default Flats;
