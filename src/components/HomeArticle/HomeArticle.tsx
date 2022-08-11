import { HOME_ARTICLE } from "../../data/home";
import photo from "./../../assets/images/article.jpg";
import { HomeArticleProps } from "./HomeArticle.props";
import styles from "./HomeArticle.module.scss";

const HomeArticle = (props: HomeArticleProps): JSX.Element => {
  return (
    <article className={styles.article}>
      <div className={styles.photo}>
        <img src={photo} alt="Фото квартиры"></img>
      </div>
      <div className={styles.textWrapper}>
        {HOME_ARTICLE.map((item, index) => (
          <p key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></p>
        ))}
      </div>
    </article>
  );
};
export default HomeArticle;
