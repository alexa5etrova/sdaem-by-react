import styles from "./Switch.module.scss";
import { SwitchProps } from "./Switch.props";

const Switch = ({ checked, name, onChange, children, ...props }: SwitchProps): JSX.Element => {
  return (
    <label className={styles.switch}>
      <input {...props} type="checkbox" checked={checked} name={name} onChange={onChange} />
      <span className={styles.slider} />
      <p className={styles.text}>{children}</p>
    </label>
  );
};

export default Switch;
