import LinkTag from "../LinkTag/LinkTag";
import { ReactComponent as ArrowIcon } from "./../../assets/icons/chevron.svg";
import styles from "./Total.module.scss";

const Total = ({ total }) => {
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.total}>
        {total}
        <span>+</span>
      </div>
      <LinkTag to="flats/minsk" linkStyle="gradientHome">
        Поcмотреть все <ArrowIcon width="9" height="11" className={styles.linkIcon} />
      </LinkTag>
      <p className={styles.text}>Предложений по Минску</p>
    </div>
  );
};

export default Total;
