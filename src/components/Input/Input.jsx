import cn from "classnames";
import styles from "./Input.module.scss";
import React from "react";

const Input = (props) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      className={cn(styles.input, {
        [styles.search]: props.inputStyle === "search",
        [styles.btnViolet]: props.btnStyle === "violet",
        [styles.btnLightViolet]: props.btnStyle === "lightViolet",
      })}
    >
      {props.children}
    </input>
  );
};

export default Input;
