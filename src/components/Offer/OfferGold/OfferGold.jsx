import LinkTag from "../../LinkTag/LinkTag";
import { ReactComponent as ArrowIcon } from "./../../../assets/icons/chevron.svg";
import styles from "./OfferGold.module.scss";

const OfferGold = ({ photo, title, text, children }) => {
  return (
    <div className={styles.offer}>
      <h3>Приоритет Gold</h3>

      <p className={styles.text}>
        Приоритетное размещение <span className={styles.textBold}>Gold </span>позволяет
        <span className={styles.textBold}> закрепить ваше объявление</span> в верхней части
        каталога!
      </p>
      <p className={styles.text}>
        Gold объявления{" "}
        <span className={styles.textBold}>
          перемещаются
          <br /> каждые 5 мин
        </span>{" "}
        на 1 позицию, что делает размещение одинаковым для всех.
      </p>
      <LinkTag to="" linkStyle="gradientHome">
        Еще о тарифе Gold <ArrowIcon width="9" height="11" className={styles.arrow} />
      </LinkTag>
    </div>
  );
};

export default OfferGold;
