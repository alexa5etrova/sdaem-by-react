import styles from "./Switch.module.scss";

const Switch = (props) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={props.value}
        name={props.name}
        onChange={props.onChange}
      />
      <span className={styles.slider} />
      <p className={styles.text}>{props.children}</p>
    </label>
  );
};

export default Switch;
