import styles from "./NewsItem.module.scss";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Htag from "./../../components/Htag/Htag";
import DateTag from "../../components/DateTag/DateTag";
import SocialMediaLogo from "./../../components/SocialMediaLogo/SocialMediaLogo";
import photo from "./../../assets/images/photoNews.jpg";
import { Newsdata } from "../../data/Newsdata";
import NewsCard from "../../components/NewsCard/NewsCard";

const NewsItem = (props) => {
  let showenNews = Newsdata.find((item) => item.id === props.id);
  let crumbs = [
    ...props.crumbs,
    { title: showenNews.title, url: `/news/${showenNews.id}`, id: 202 },
  ];

  let index = Newsdata.findIndex((item) => item.id === props.id);

  let readMore = [...Newsdata].splice(index, 3);
  console.log(readMore);

  return (
    <>
      <div className={styles.newsItem}>
        <div className={styles.newsHeader}>
          <nav className={styles.crumbsContainer}>
            <Breadcrumbs crumbs={crumbs} />
          </nav>
          <Htag tag="h1">{showenNews.title}</Htag>
          <div className={styles.tags}>
            <DateTag dateStyle="violet" date={showenNews.date} />
            <div>
              Поделиться: <SocialMediaLogo />
            </div>
          </div>
        </div>
        <div className={styles.photo}>
          <img src={photo} alt={showenNews.title} />
        </div>
        <div className={styles.newsText}>{showenNews.short}</div>
      </div>
      <div className={styles.readMore}>
        {readMore.map((item) => (
          <NewsCard
            key={item.id}
            title={item.title}
            date={item.date}
            short={item.short}
            photo={item.photo}
          />
        ))}
      </div>
    </>
  );
};

export default NewsItem;
