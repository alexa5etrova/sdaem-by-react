import styles from "./NewsItem.module.scss";
import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Htag from "./../../components/Htag/Htag";
import DateTag from "../../components/DateTag/DateTag";
import SocialMediaLogo from "./../../components/SocialMediaLogo/SocialMediaLogo";
import photo from "./../../assets/images/photoNews.jpg";
import { Newsdata } from "../../data/Newsdata";
import NewsCard from "../../components/NewsCard/NewsCard";
import { useParams } from "react-router-dom";

const NewsItem = (props) => {
  const {newsId} = useParams();
  
  let showenNews = Newsdata.find((item) => item.id === Number(newsId));
  let crumbs = [
    ...props.crumbs,
    { title: showenNews.title, url: `/news/${showenNews.id}`, id: 202 },
  ];

  let index = Newsdata.findIndex((item) => item.id === Number(newsId));

  let readMore = [...Newsdata].splice(index+1, 3);
  

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
        <div className={styles.newsText}>{showenNews.body.map(text=><p>{text}</p>)}</div>
      </div>


      <div className={styles.readMore}>
        <div className={styles.readMoreContainer}>
          <Htag tag="h2">Читайте также</Htag>
          <div className={styles.extraNewsContainer}>
            {readMore.map((item) => (
          <NewsCard
          key={item.id}
          id={item.id}
          title={item.title}
          date={item.date}
          text={item.short}
          photo={item.photo}
          />
        ))}</div>
        
        </div>
      </div>
      
    </>
  );
};

export default NewsItem;
