import styles from "./Background.module.scss";

const Background = (props) => {
  return (
    <div className={styles.background}>
      <div className={styles.mask}>{props.children}</div>
    </div>
  );
};

export default Background;
