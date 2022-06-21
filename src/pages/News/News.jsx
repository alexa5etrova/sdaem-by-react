import Htag from "../../components/Htag/Htag";
import { Newsdata } from "./../../data/Newsdata";
import NewsCard from "./../../components/NewsCard/NewsCard";
import styles from "./News.module.scss";

const News = (props) => {
  return (
    <>
      <Htag tag="h1">Новости</Htag>
      <div className={styles.newsContainer}>
        {Newsdata.map(function (item) {
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
    </>
  );
};

export default News;
