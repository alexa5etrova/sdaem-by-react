import React from "react";
import { useState } from "react";
import cn from "classnames";
import { ReactComponent as UserIcon } from "./../../../assets/icons/user.svg";
import { ReactComponent as LockIcon } from "./../../../assets/icons/lock.svg";
import { ReactComponent as EmailIcon } from "./../../../assets/icons/envelope.svg";
import { ReactComponent as AttentionIcon } from "./../../../assets/icons/attention.svg";
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
      icon = <EmailIcon className={iconStyles} />;
      break;
    case "password":
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
