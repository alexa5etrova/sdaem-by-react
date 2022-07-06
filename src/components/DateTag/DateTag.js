import cn from "classnames";
import styles from "./DateTag.module.scss";


const DateTag = (props) => {
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
  let date = new Date(props.date);

  let updDate =
    date.getDay() + " " + months[date.getMonth()] + " " + date.getFullYear();

  return (
    <div
      className={cn(styles.date, {
        [styles.dateViolet]: props.dateStyle === "violet",
        [styles.dateGhost]: props.dateStyle === "ghost",
      })}
    >
      {updDate}
    </div>
  );
};

export default DateTag;
