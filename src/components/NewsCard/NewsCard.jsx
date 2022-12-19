import Htag from "components/Htag/Htag";
import LinkTag from "components/LinkTag/LinkTag";
import DateTag from "components/DateTag/DateTag";
import { NEWS_PREVIEW_LENGTH } from "data/news";

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
        <LinkTag linkStyle="lightViolet" to={"/news/" + id}>
          Читать
        </LinkTag>
      </div>
    </div>
  );
};
export default NewsCard;
