import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNews } from "../../redux/newsSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { HomeNewsNavProps } from "./HomeNewsNav.props";
import Htag from "../Htag/Htag";
import Loader from "../Loader/Loader";
import LinkTag from "../LinkTag/LinkTag";
import DateTag from "../DateTag/DateTag";
import ArrowIcon from "./../../assets/icons/chevron.svg";

import styles from "./HomeNewsNav.module.scss";

const HomeNewsNav = (props: HomeNewsNavProps): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("/news"));
  }, [dispatch]);

  const { news, status, error } = useSelector((state: RootState) => state.news);
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
          Посмотреть все <ArrowIcon height="13" width="7" className={styles.arrow} />
        </LinkTag>
      </nav>
    );
  }
  return <></>;
};

export default HomeNewsNav;
