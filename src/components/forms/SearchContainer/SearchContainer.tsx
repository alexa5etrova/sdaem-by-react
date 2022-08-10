import React from "react";
import cn from "classnames";
import { FC } from "react";
import styles from "./SearchContainer.module.scss";

const SearchContainer = ({ children, stl }): JSX.Element => {
  return (
    <div
      className={cn(styles.container, {
        [styles.search]: stl === "search",
        [styles.carousel]: stl === "carousel",
      })}
    >
      {children}
    </div>
  );
};

export default SearchContainer;
