import AttentionIcon from "../../../assets/icons/AttentionIcon";
import { WarningProps } from "./Warning.props";
import styles from "./Warning.module.scss";

const Warning = (props: WarningProps): JSX.Element => {
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
