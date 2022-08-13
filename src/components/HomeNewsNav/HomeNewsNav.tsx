import { useEffect } from "react";
import newsSlice, { fetchNews } from "../../redux/newsSlice";
import { useAppDispatch, useAppSelector } from "../../hook/redux";
import { HomeNewsNavProps } from "./HomeNewsNav.props";
import Htag from "../Htag/Htag";
import Loader from "../Loader/Loader";
import LinkTag from "../LinkTag/LinkTag";
import DateTag from "../DateTag/DateTag";
import ChevronIcon from "../../assets/icons/ChevronIcon";

import styles from "./HomeNewsNav.module.scss";

const HomeNewsNav = ({ news, ...props }: HomeNewsNavProps): JSX.Element => {
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
};

export default HomeNewsNav;
