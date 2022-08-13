import React from "react";
import { useState } from "react";
import { InputProps } from "./Input.props";
import cn from "classnames";
import UserIcon from "../../../assets/icons/UserIcon";
import LockIcon from "../../../assets/icons/LockIcon";
import EnvelopeIcon from "../../../assets/icons/EnvelopeIcon";
import AttentionIcon from "../../../assets/icons/AttentionIcon";
import styles from "./Input.module.scss";

const Input = ({
  name,
  id,
  value,
  inputStyle,
  error,
  errorStyle,
  ...props
}: InputProps): JSX.Element => {
  const [iconOnFocus, setIconOnFocus] = useState<boolean>(false);

  let icon: JSX.Element;
  let iconStyles = cn(styles.inputIcon, {
    [styles.iconOnFocus]: iconOnFocus === true,
    [styles.iconWithoutFocus]: iconOnFocus === false,
  });

  switch (name) {
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
        {...props}
        id={id}
        name={name}
        value={value}
        onMouseOver={() => setIconOnFocus(true)}
        onMouseOut={() => setIconOnFocus(false)}
        onFocus={() => setIconOnFocus(true)}
        onBlur={() => setIconOnFocus(false)}
        className={cn(styles.input, {
          [styles.search]: inputStyle === "search",
          [styles.formInput]: inputStyle === "formInput",
          [styles.error]: error === true,
        })}
      />
      {error && (
        <div
          className={cn(styles.errorIcon, {
            [styles.errorAuth]: errorStyle === "auth",
          })}
        >
          <AttentionIcon />
        </div>
      )}
    </div>
  );
};

export default Input;
