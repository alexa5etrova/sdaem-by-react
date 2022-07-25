import Htag from "../Htag/Htag";
import { Link } from "react-router-dom";

import DateTag from "../DateTag/DateTag";
import { NEWS_PREVIEW_LENGTH } from "../../data/const";

import styles from "./NewsCard.module.scss";

const NewsCard = ({ id, text, title, photo, date }) => {
  let cutText = text.substr(0, NEWS_PREVIEW_LENGTH) + "...";

  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.cardTextContainer}>
        <Htag tag="h3">{title}</Htag>
        <p className={styles.cardText}>{cutText}</p>
      </div>
      <div className={styles.cardBtnContainer}>
        <DateTag dateStyle="ghost" date={date}></DateTag>
        <div className={styles.linkViolet}>
          <Link to={"/news/" + id}>Читать</Link>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
