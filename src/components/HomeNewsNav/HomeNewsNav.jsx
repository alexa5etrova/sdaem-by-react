import { useEffect } from "react";
import ChevronIcon from "assets/icons/ChevronIcon";
import DateTag from "components/DateTag/DateTag";
import Htag from "components/Htag/Htag";

import LinkTag from "components/LinkTag/LinkTag";
import Loader from "components/Loader/Loader";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { fetchNews } from "redux/newsSlice";

import styles from "./HomeNewsNav.module.scss";


const HomeNewsNav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("/news"));
  }, [dispatch]);

  const { news, status, error } = useSelector((state) => state.news);
  if (status === "loading") {
    return <Loader />;
  }
  if (status === "rejected") {
    return <p>{error}</p>;
  }
  if (status === "resolved") {
    return (
      <nav className={styles.nav}>
        <Htag tag="h2">Новости</Htag>
        <ul className={styles.news}>
          {news.slice(0, 5).map((item) => (
            <li key={item.id} className={styles.newsItem}>
              <LinkTag linkStyle="newsList" to={`/news/${item.id}`}>
                {item.title}
              </LinkTag>
              <DateTag dateStyle="withoutYear" date={item.date} />
            </li>
          ))}
        </ul>
        <LinkTag linkStyle="newsSeeAll" to="/news">
          Посмотреть все <ChevronIcon height="13" width="7" className={styles.arrow} />
        </LinkTag>
      </nav>
    );
  }
};

export default HomeNewsNav;
