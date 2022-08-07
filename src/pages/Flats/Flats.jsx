import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import { fetchFlats } from "./../../redux/flatsSlice";
import FlatCard from "./../../components/FlatCard/FlatCard";
import Htag from "../../components/Htag/Htag";
import ToMap from "../../components/ToMap/ToMap";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/Loader/Loader";
import Filter from "./../../components/forms/Filter/Filter";

import { DISTRICT, FLATS_PER_PAGE } from "../../data/flats";
import { FLAT_CATEGORIES } from "./../../data/nav";

import styles from "./Flats.module.scss";
import Reccomend from "../../components/Reccomend/Reccomend";
import { CITIES } from "./../../data/flats";
import ViewButtons from "../../components/ViewButtons/ViewButtons";

const Flats = (props) => {
  const request = useLocation();
  const dispatch = useDispatch();
  const { flats, status, error } = useSelector((state) => state.flats);
  const [firstContentIndex, setFirstContentIndex] = useState();
  const [lastContentIndex, setLastContentIndex] = useState();
  const [rooms, setRooms] = useState("");
  const [city, setCity] = useState("");
  const [view, setView] = useState("list");
  const [cityValue, setCityValue] = useState("");

  useEffect(() => {
    dispatch(fetchFlats(`/flats${request.search}`));
  }, [dispatch, request]);

  useEffect(() => {
    let index = request.search.indexOf("rooms=");
    index !== -1 ? setRooms(request.search[index + 6] + "-комнатных") : setRooms("");

    let category = FLAT_CATEGORIES.filter((item) => request.search.includes(item.path.slice(7)));
    category.length !== 0 ? setCity(category[0].name.slice(9)) : setCity("");

    let cityV = CITIES.filter((item) => request.search.includes(item.value));
    cityV.length !== 0 ? setCityValue(cityV[0].value) : setCity("");
  }, [request]);

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
        <div className={styles.headerBg}>
          <div className={styles.pageContainer}>
            <nav className={styles.crumbsContainer}>
              <Breadcrumbs crumbs={[{ id: 1, title: `Квартиры ${city}`, url: "/flats" }]} />
            </nav>
            <Htag tag="h1">
              Аренда {rooms} квартир на сутки {city}
            </Htag>
            <Reccomend
              city={cityValue}
              districts={request.search.includes("minsk") ? DISTRICT : []}
            />
          </div>
        </div>
        <Filter page="flats" city={cityValue} />
        <div className={styles.pageContainer}>
          <ViewButtons view={view} setView={setView} />
          <p className={styles.total}>Найдено {filteredFlats.length} результата</p>

          <div className={cn({ [styles.list]: view === "list", [styles.tile]: view === "tile" })}>
            {status === "resolved" && filteredFlats.length === 0 ? (
              <p>Нет объявлений соответсвующих поиску</p>
            ) : null}
            {status === "resolved" &&
              filteredFlats.slice(firstContentIndex, lastContentIndex).map(function (item) {
                return <FlatCard key={item.id} flat={item} view={view} page="flats" />;
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
