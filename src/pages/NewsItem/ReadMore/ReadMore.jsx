import { useSelector } from "react-redux";
import Htag from "components/Htag/Htag";
import NewsCard from "components/NewsCard/NewsCard";
import styles from "./ReadMore.module.scss";

const ReadMore = (props) => {
  const { news } = useSelector((state) => state.news);
  let readMore = [...news].splice(1, 3);
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
