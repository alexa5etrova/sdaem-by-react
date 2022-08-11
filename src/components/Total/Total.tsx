import LinkTag from "../LinkTag/LinkTag";
import ArrowIcon from "./../../assets/icons/chevron.svg";
import styles from "./Total.module.scss";
import { TotalProps } from "./Total.props";

const Total = ({ total }: TotalProps): JSX.Element => {
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.total}>
        {total}
        <span>+</span>
      </div>
      <LinkTag to="flats?city=minsk" linkStyle="gradientHome">
        Поcмотреть все <ArrowIcon width="9" height="11" className={styles.linkIcon} />
      </LinkTag>
      <p className={styles.text}>Предложений по Минску</p>
    </div>
  );
};

export default Total;
