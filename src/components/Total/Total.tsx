import ChevronIcon from "../../assets/icons/ChevronIcon";
import LinkTag from "../LinkTag/LinkTag";
import { TotalProps } from "./Total.props";

import styles from "./Total.module.scss";

const Total = ({ total }: TotalProps): JSX.Element => {
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.total}>
        {total}
        <span>+</span>
      </div>
      <LinkTag to="flats?city=minsk" linkStyle="gradientHome">
        Поcмотреть все <ChevronIcon width="20" height="20" className={styles.linkIcon} />
      </LinkTag>
      <p className={styles.text}>Предложений по Минску</p>
    </div>
  );
};

export default Total;
