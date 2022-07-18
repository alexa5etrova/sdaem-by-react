import styles from "./Switch.module.scss";

const Switch = (props) => {
  return (
    <label className={styles.switch}>
      <input type="checkbox" />
      <span className={styles.slider} />
      <p className={styles.text}>{props.children}</p>
    </label>
  );
};

export default Switch;
