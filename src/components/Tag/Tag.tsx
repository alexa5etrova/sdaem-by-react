import React from "react";
import { TagProps } from "./Tag.props";
import styles from "./Tag.module.scss";

const Tag = ({ children, tagType, ...props }: TagProps): JSX.Element => {
  switch (tagType) {
    case "gold":
      return (
        <div className={styles.gold} {...props}>
          Gold
        </div>
      );
    case "info":
      return (
        <div className={styles.info} {...props}>
          {children}
        </div>
      );
    case "infoTile":
      return (
        <div className={styles.infoTile} {...props}>
          {children}
        </div>
      );

    default:
      return <></>;
  }
};

export default Tag;
