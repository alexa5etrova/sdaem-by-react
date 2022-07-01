import Htag from "../Htag/Htag";
import styles from "./NewsCard.module.scss";
import photo from "./../../assets/images/photoNews.jpg";
import photo2 from "./../../assets/images/photoNewsCard.jpg";
import DateTag from "../DateTag/DateTag";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  let id = props.id;
  let text = props.text.substr(0, 218) + "...";
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={photo2} alt={props.title} />
      </div>
      <div className={styles.cardTextContainer}>
        <Htag tag="h3">{props.title}</Htag>
        <p className={styles.cardText}>{text}</p>
      </div>
      <div className={styles.cardBtnContainer}>
        <DateTag dateStyle="ghost" date={props.date}></DateTag>
        <div className={styles.linkViolet}>
          <Link to={"/news/" + id}>Читать</Link>
        </div>
      </div>
    </div>
  );
};
export default NewsCard;
