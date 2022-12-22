import React from "react";
import { useState } from "react";
import AttentionIcon from "assets/icons/AttentionIcon";

import EnvelopeIcon from "assets/icons/EnvelopeIcon";
import LockIcon from "assets/icons/LockIcon";
import UserIcon from "assets/icons/UserIcon";

import cn from "classnames";

import styles from "./Input.module.scss";


const Input = (props) => {
  const [iconOnFocus, setIconOnFocus] = useState(false);

  let icon;
  let iconStyles = cn(styles.inputIcon, {
    [styles.iconOnFocus]: iconOnFocus === true,
    [styles.iconWithoutFocus]: iconOnFocus === false,
  });

  switch (props.name) {
    case "name" || "login":
      icon = <UserIcon className={iconStyles} />;
      break;
    case "login":
      icon = <UserIcon className={iconStyles} />;
      break;
    case "email":
      icon = <EnvelopeIcon className={iconStyles} />;
      break;
    case "password":
      icon = <LockIcon className={iconStyles} />;
      break;
    case "pswdRepeat":
      icon = <LockIcon className={iconStyles} />;
      break;
    default:
      icon = <></>;
  }

  return (
    <div className={styles.inputWrapper}>
      {icon}
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onMouseOver={() => setIconOnFocus(true)}
        onMouseOut={() => setIconOnFocus(false)}
        onFocus={() => setIconOnFocus(true)}
        onBlur={() => setIconOnFocus(false)}
        className={cn(styles.input, {
          [styles.search]: props.inputStyle === "search",
          [styles.formInput]: props.inputStyle === "formInput",
          [styles.error]: props.error === true,
        })}
      />
      {props.error && (
        <div
          className={cn(styles.errorIcon, {
            [styles.errorAuth]: props.errorStyle === "auth",
          })}
        >
          <AttentionIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
