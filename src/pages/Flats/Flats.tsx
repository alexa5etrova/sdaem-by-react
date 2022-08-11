import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import cn from "classnames";

import { FlatsProps } from "./Flats.props";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { fetchFlats } from "../../redux/flatsSlice";
import { DISTRICT, FLATS_PER_PAGE } from "../../data/flats";
import { FLAT_CATEGORIES } from "../../data/nav";

import FlatCard from "../../components/FlatCard/FlatCard";
import Htag from "../../components/Htag/Htag";
import ToMap from "../../components/ToMap/ToMap";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Loader from "../../components/Loader/Loader";
import Filter from "../../components/forms/Filter/Filter";
import Reccomend from "../../components/Reccomend/Reccomend";
import ViewButtons from "../../components/ViewButtons/ViewButtons";
import SocialsShared from "../../components/SocialsShared/SocialsShared";

import styles from "./Flats.module.scss";

const Flats = (props: FlatsProps): JSX.Element => {
  const request = useLocation();
  const dispatch = useAppDispatch();
  const { flats, status, error } = useAppSelector((state) => state.flats);

  const [firstContentIndex, setFirstContentIndex] = useState<number>();
  const [lastContentIndex, setLastContentIndex] = useState<number>();
  const [rooms, setRooms] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [view, setView] = useState<"tile" | "list">("tile");

  useEffect(() => {
    dispatch(fetchFlats(`/flats${request.search}`));
  }, [dispatch, request]);

  useEffect(() => {
    let index = request.search.indexOf("rooms=");
    index !== -1 ? setRooms(request.search[index + 6] + "-комнатных") : setRooms("");

    let category = FLAT_CATEGORIES.filter((item) => request.search.includes(item.path.slice(7)));
    category.length !== 0 ? setCity(category[0].name.slice(9)) : setCity("");
  }, [request]);

  //функции для постраничного вывода, передаем их в props компонента Pagination
  const getFirstIndex = (i: number) => {
    setFirstContentIndex(i);
  };
  const getLastIndex = (i: number) => {
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
            <Reccomend districts={request.search.includes("minsk") ? DISTRICT : []} />
          </div>
        </div>
        <Filter page="flats" />
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
            <SocialsShared
              page="flats"
              title={`Аренда ${rooms} квартир на сутки ${city}`}
              photo={""}
              sharedLink={request.pathname + request.search}
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
  return <></>;
};

export default Flats;
