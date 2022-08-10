import React from "react";
import cn from "classnames";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.scss";

const Button = ({ children, btnStyle, ...props }: ButtonProps) => {
  return (
    <button
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
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
