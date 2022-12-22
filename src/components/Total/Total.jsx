import ChevronIcon from "assets/icons/ChevronIcon";

import LinkTag from "../LinkTag/LinkTag";

import styles from "./Total.module.scss";


const Total = ({ total }) => {
  return (
    <div className={styles.totalWrapper}>
      <div className={styles.total}>
        {total}
        <span>+</span>
      </div>
      <LinkTag to="flats?city=minsk" linkStyle="gradientHome">
        Поcмотреть все <ChevronIcon width="9" height="11" className={styles.linkIcon} />
      </LinkTag>
      <p className={styles.text}>Предложений по Минску</p>
    </div>
  );
};

export default Total;
