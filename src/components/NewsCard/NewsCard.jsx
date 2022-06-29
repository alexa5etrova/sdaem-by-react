import Htag from "../Htag/Htag";
import styles from "./NewsCard.module.scss";
import Button from "./../Button/Button";
import photo from "./../../assets/images/photoNews.jpg";
import DateTag from "../DateTag/DateTag";

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
        <DateTag dateStyle="ghost" date={props.date}></DateTag>
        <Button btnStyle="lightViolet">Читать</Button>
      </div>
    </div>
  );
};
export default NewsCard;
