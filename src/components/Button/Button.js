import styles from "./Button.module.scss";
import cn from "classnames";

const Button = (props) => {
  return (
    <button
      type="button"
      className={cn(styles.button, {
        [styles.btnGradient]: props.btnStyle === "gradient",
        [styles.btnViolet]: props.btnStyle === "violet",
        [styles.btnLightViolet]: props.btnStyle === "lightViolet",
      })}
    >
      {props.children}
    </button>
  );
};

export default Button;
