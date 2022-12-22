import cn from "classnames";

import styles from "./Button.module.scss";


const Button = ({ type, btnStyle, onClick, children }) => {
  return (
    <button
      type={type}
      className={cn(styles.button, {
        [styles.btnGradient]: btnStyle === "gradient",
        [styles.btnViolet]: btnStyle === "violet",
        [styles.btnSend]: btnStyle === "send",
        [styles.btnLightViolet]: btnStyle === "lightViolet",
        [styles.btnSearch]: btnStyle === "search",
        [styles.btnYellow]: btnStyle === "yellow",
        [styles.btnFilter]: btnStyle === "filter",
        [styles.btnWhite]: btnStyle === "white",
        [styles.btnDisable]: btnStyle === "disable",
        [styles.btnSwitchOffChoise]: btnStyle === "switchOff",
        [styles.viewOn]: btnStyle === "viewOn",
        [styles.viewOff]: btnStyle === "viewOff",
        [styles.rose]: btnStyle === "rose",
        [styles.roseRound]: btnStyle === "roseRound",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
