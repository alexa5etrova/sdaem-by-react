import styles from "./DateTag.module.scss";
import cn from "classnames";

const DateTag = ({ date, dateStyle }) => {
  let months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  console.log(date);
  let updDate = new Date(date);
  let fullDate = updDate.getDay() + " " + months[updDate.getMonth()] + " " + updDate.getFullYear();
  let withoutYear = updDate.getDay() + " " + months[updDate.getMonth()];

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
