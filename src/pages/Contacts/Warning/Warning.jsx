import AttentionIcon from "assets/icons/AttentionIcon";

import styles from "./Warning.module.scss";


const Warning = (props) => {
  return (
    <div className={styles.warning}>
      <div className={styles.warningIcon}>
        <AttentionIcon width="35" height="35" />
      </div>
      <p className={styles.warningText}>
        Администрация сайта не владеет информацией о наличии свободных квартир
      </p>
    </div>
  );
};

export default Warning;
