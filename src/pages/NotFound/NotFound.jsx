import HomeIcon from "assets/icons/HomeIcon";

import photo404 from "assets/images/404.png";
import Background from "components/Background/Background";
import Htag from "components/Htag/Htag";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";


const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Background>
        <div className={styles.notFoundcontainer}>
          <div className={styles.textContainer}>
            <Htag tag="notFound">Ошибка 404</Htag>
            <p className={styles.textNotFound}>
              Возможно, у вас опечатка в адресе страницы, или её просто не существует
            </p>
            <Link to="/" className={styles.linkNotFound}>
              <span className={styles.homeIcon}>
                <HomeIcon />
              </span>
              Вернуться на главную
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <img src={photo404} alt="Изображение 404 ошибки" />
          </div>
        </div>
      </Background>
    </div>
  );
};
export default NotFound;
