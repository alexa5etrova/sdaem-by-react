import { useSelector } from "react-redux";
import Htag from "components/Htag/Htag";
import NewsCard from "components/NewsCard/NewsCard";
import { NEWSITEM_READMORE } from "data/news";
import styles from "./ReadMore.module.scss";

const ReadMore = (props) => {
  const { news } = useSelector((state) => state.news);
  const readMore = [...news].splice(1, NEWSITEM_READMORE - 1);
  return (
    <>
      <div className={styles.readMore}>
        <div className={styles.readMoreContainer}>
          <Htag tag="h2">Читайте также</Htag>
          <div className={styles.extraNewsContainer}>
            {readMore.map((item) => (
              <NewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReadMore;
