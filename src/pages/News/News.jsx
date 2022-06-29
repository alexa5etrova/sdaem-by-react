import Htag from "../../components/Htag/Htag";
import { NewsCrumbs, Newsdata } from "./../../data/Newsdata";
import NewsCard from "./../../components/NewsCard/NewsCard";
import styles from "./News.module.scss";
import { useState } from "react";
import Pagination from "../../components/Pagination/Pagination";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Search from "../../components/Search/Search";

const News = (props) => {
  const [firstContentIndex, setFirstContentIndex] = useState();
  const [lastContentIndex, setLastContentIndex] = useState();
  const [search, setSearch] = useState("");

  const getFirstIndex = (i) => {
    setFirstContentIndex(i);
  };
  const getLastIndex = (i) => {
    setLastContentIndex(i);
  };

  const filteredNewsData = Newsdata.filter(function (item) {
    if (search === "") {
      return item;
    } else {
      return item.title.toLowerCase().includes(search);
    }
  });

  return (
    <>
      <nav className={styles.crumbsContainer}>
        <Breadcrumbs crumbs={NewsCrumbs} />
      </nav>
      <Search searchHandler={setSearch}></Search>
      <Htag tag="h1">Новости</Htag>
      <div className={styles.newsContainer}>
        {filteredNewsData
          .slice(firstContentIndex, lastContentIndex)
          .map(function (item) {
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
          data={filteredNewsData}
          sendFirstIndex={getFirstIndex}
          sendLastIndex={getLastIndex}
        />
      </div>
    </>
  );
};

export default News;
