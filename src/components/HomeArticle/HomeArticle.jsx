import { HOME_ARTICLE } from "../../data/home";
import photo from "./../../assets/images/article.jpg";
import styles from "./HomeArticle.module.scss";

const HomeArticle = () => {
  return (
    <article className={styles.article}>
      <div className={styles.photo}>
        <img src={photo} alt="Фото квартиры"></img>
      </div>
      <div className={styles.textWrapper}>
        {HOME_ARTICLE.body.map((item) => (
          <p className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></p>
        ))}
      </div>
    </article>
  );
};
export default HomeArticle;
