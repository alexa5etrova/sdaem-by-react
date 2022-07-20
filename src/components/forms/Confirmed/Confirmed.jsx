import { Link } from "react-router-dom";
import Htag from "./../../Htag/Htag";

import styles from "./Confirmed.module.scss";

const Confirmed = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dialog}>
        <Htag tag="h2">Подтвердите регистрацию</Htag>
        <p className={styles.text}>
          Письмо для подтверждения аккаунта отправлено почту. Перейдите по
          ссылке, указанной в письме. Если письма нет, то проверьте спам.
        </p>
        <div className={styles.linkYellow}>
          <Link to="/">Понятно</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmed;
