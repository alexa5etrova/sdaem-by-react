import Htag from "../../components/Htag/Htag";
import { Newsdata } from "./../../data/Newsdata";
import NewsCard from "./../../components/NewsCard/NewsCard";
import styles from "./News.module.scss";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";

const News = (props) => {
  const [firstContentIndex, setFirstContentIndex] = useState();
  const [lastContentIndex, setLastContentIndex] = useState();

  const getFirstIndex = (index) => {
    setFirstContentIndex(index);
  };
  const getLastIndex = (index) => {
    setLastContentIndex(index);
  };

  return (
    <>
      <Htag tag="h1">Новости</Htag>
      <div className={styles.newsContainer}>
        {Newsdata.slice(firstContentIndex, lastContentIndex).map(function (
          item
        ) {
          return (
            <NewsCard
              key={item.id}
              title={item.title}
              date={item.date}
              short={item.short}
              photo={item.photo}
            />
          );
        })}
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          data={Newsdata}
          sendFirstIndex={getFirstIndex}
          sendLastIndex={getLastIndex}
        />
      </div>
    </>
  );
};

export default News;
