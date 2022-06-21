import styles from "./Date.module.scss";
import cn from "classnames";

const Date = (props) => {
  return (
    <div
      className={cn(styles.date, {
        [styles.dateViolet]: props.dateStyle === "violet",
        [styles.dateGhost]: props.dateStyle === "ghost",
      })}
    >
      {props.children}
    </div>
  );
};

export default Date;
