import React from "react";
import { HtagProps } from "./Htag.props";
import styles from "./Htag.module.scss";

const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styles.h1}>{children}</h1>;
    case "h1white":
      return <h1 className={styles.h1white}>{children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{children}</h2>;
    case "h2FlatHeader":
      return <h2 className={styles.h2FlatHeader}>{children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{children}</h3>;
    case "h3bigger":
      return <h3 className={styles.h3bigger}>{children}</h3>;
    case "h3violet":
      return <h3 className={styles.h3violet}>{children}</h3>;
    case "notFound":
      return <h1 className={styles.notFound}>{children}</h1>;
    case "homeViolet":
      return <h3 className={styles.homeViolet}>{children}</h3>;
    case "homeVioletBigger":
      return <h3 className={styles.homeVioletBigger}>{children}</h3>;
    case "h2white":
      return <h2 className={styles.h2white}>{children}</h2>;
    default:
      return <></>;
  }
};

export default Htag;
