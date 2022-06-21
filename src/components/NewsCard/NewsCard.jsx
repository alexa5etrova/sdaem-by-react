import Date from "../Date/Date";
import Htag from "../Htag/Htag";
import styles from "./NewsCard.module.scss";
import Button from "./../Button/Button";
import photo from "./../../assets/images/photoNews.jpg";

const NewsCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={photo} alt={props.title} />
      </div>
      <div className={styles.cardTextContainer}>
        <Htag tag="h3">{props.title}</Htag>
        <p className={styles.cardText}>{props.short}</p>
      </div>
      <div className={styles.cardBtnContainer}>
        <Date dateStyle="ghost">{props.date}</Date>
        <Button btnStyle="lightViolet">Читать</Button>
      </div>
    </div>
  );
};
export default NewsCard;
