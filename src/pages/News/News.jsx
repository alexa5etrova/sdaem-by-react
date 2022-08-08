import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Htag from "../../components/Htag/Htag";
import NewsCard from "./../../components/NewsCard/NewsCard";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/forms/Search/Search";
import Loader from "../../components/Loader/Loader";
import { fetchNews } from "./../../redux/newsSlice";
import { CRUMBS } from "./../../data/nav";
import { NEWS_PER_PAGE } from "../../data/news";

import styles from "./News.module.scss";

const News = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("/news"));
  }, [dispatch]);

  const { news, status, error } = useSelector((state) => state.news);
  const [firstContentIndex, setFirstContentIndex] = useState();
  const [lastContentIndex, setLastContentIndex] = useState();
  const [search, setSearch] = useState("");

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
    const filteredNewsData = news.filter(function (item) {
      if (search === "") {
        return item;
      } else {
        return item.title.toLowerCase().includes(search);
      }
    });

    return (
      <div className={styles.pageContainer}>
        <nav className={styles.crumbsContainer}>
          <Breadcrumbs crumbs={CRUMBS.news} />
        </nav>
        <Search searchHandler={setSearch}></Search>
        <Htag tag="h1">Новости</Htag>
        <div className={styles.newsContainer}>
          {status === "resolved" && filteredNewsData.length === 0 ? (
            <p className={styles.noResults}>Нет статей соответсвующих поиску</p>
          ) : null}
          {status === "resolved" &&
            filteredNewsData.slice(firstContentIndex, lastContentIndex).map(function (item) {
              return (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  text={item.short}
                  photo={item.photo}
                />
              );
            })}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            data={filteredNewsData}
            sendFirstIndex={getFirstIndex}
            sendLastIndex={getLastIndex}
            contentPerPage={NEWS_PER_PAGE}
          />
        </div>
      </div>
    );
  }
};

export default News;
