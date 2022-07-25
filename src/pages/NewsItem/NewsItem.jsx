import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import Breadcrumbs from "./../../components/Breadcrumbs/Breadcrumbs";
import Htag from "./../../components/Htag/Htag";
import DateTag from "../../components/DateTag/DateTag";
import SocialMediaLogo from "./../../components/SocialMediaLogo/SocialMediaLogo";
import NewsCard from "../../components/NewsCard/NewsCard";
import Loader from "../../components/Loader/Loader";

import { fetchNews } from "./../../redux/newsSlice";

import styles from "./NewsItem.module.scss";
import { CRUMBS } from "./../../data/nav";

const NewsItem = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  const { newsId } = useParams();
  const { news, status } = useSelector((state) => state.news);

  if (status === "resolved") {
    let showenNews = news.find((item) => item.id === Number(newsId));

    let crumbs = [
      ...CRUMBS.news,
      { title: showenNews.title, url: `/news/${showenNews.id}`, id: 202 },
    ];

    let index = news.findIndex((item) => item.id === Number(newsId));
    let readMore = [...news].splice(index + 1, 3);

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
                <div className={styles.socialTags}>
                  <p>Поделиться:</p> <SocialMediaLogo />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.photo}>
            <img src={`./../${showenNews.photo}`} alt={showenNews.title} />
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
                <NewsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  text={item.short}
                  photo={`./../${item.photo}`}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
  return <Loader />;
};

export default NewsItem;
