import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { fetchNews } from "redux/newsSlice";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs";
import Htag from "components/Htag/Htag";
import DateTag from "components/DateTag/DateTag";
import NewsCard from "components/NewsCard/NewsCard";
import Loader from "components/Loader/Loader";
import SocialsShared from "components/SocialsShared/SocialsShared";
import { CRUMBS } from "data/nav";
import { HOME_URL } from "data/admin";
import { STATUSES } from "data/admin";

import styles from "./NewsItem.module.scss";

const NewsItem = (props) => {
  const { newsId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNews(`/news?_start=${newsId}&_end=${newsId + 3}`));
  }, [dispatch]);

  const { news, status } = useSelector((state) => state.news);

  if (status === STATUSES.resolved && news.length > 0) {
    let showenNews = news[0];

    const crumbs = [
      ...CRUMBS.news,
      { title: showenNews.title, url: `/news/${showenNews.id}`, id: 202 },
    ];

    let readMore = [...news].splice(1, 3);

    return (
      <>
        <div className={styles.newsItem}>
          <div className={styles.newsHeader}>
            <div className={styles.newsHeaderContainer}>
              <nav className={styles.crumbsContainer}>
                <Breadcrumbs crumbs={crumbs} />
              </nav>
              <Htag tag="h1">{showenNews.title}</Htag>
              <div className={styles.tags}>
                <DateTag dateStyle="violet" date={showenNews.date} />
                <SocialsShared
                  title={showenNews.title}
                  sharedLink={`${HOME_URL}/news/${showenNews.id}`}
                  photo={`${HOME_URL}/images/${showenNews.photo}`}
                />
              </div>
            </div>
          </div>
          <div className={styles.photo}>
            <img src={showenNews.photo} alt={showenNews.title} />
          </div>
          <div className={styles.newsText}>
            {showenNews.body.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </div>

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
  } else if (status === STATUSES.loading) {
    return (
      <>
        <Loader />
      </>
    );
  } else {
    return <div>такой новости не существует</div>;
  }
};

export default NewsItem;
