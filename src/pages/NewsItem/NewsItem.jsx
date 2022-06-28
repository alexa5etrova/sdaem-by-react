import styles from "./NewsItem.module.scss";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Htag from "./../../components/Htag/Htag";

const NewsItem = (props) => {
  let crumbs = [...props.crumbs, props.title];
  return (
    <>
      <div className={styles.newsItem}>
        <nav className={styles.crumbsContainer}>
          <Breadcrumbs crumbs={crumbs} />
        </nav>
        <Htag tag="h1">{props.title}</Htag>
      </div>
    </>
  );
};

export default NewsItem;
