import cn from "classnames";

import { MONTHS } from "./../../data/admin";
import styles from "./DateTag.module.scss";


const DateTag = ({ date, dateStyle }) => {
  let updDate = new Date(date);
  let fullDate = updDate.getDay() + " " + MONTHS[updDate.getMonth()] + " " + updDate.getFullYear();
  let withoutYear = updDate.getDay() + " " + MONTHS[updDate.getMonth()];

  switch (dateStyle) {
    case "violet":
      return <div className={cn(styles.date, styles.dateViolet)}>{fullDate}</div>;
    case "ghost":
      return <div className={cn(styles.date, styles.dateGhost)}>{fullDate}</div>;
    case "withoutYear":
      return <div className={cn(styles.withoutYear)}>{withoutYear}</div>;
    default:
      return <></>;
  }
};

export default DateTag;
