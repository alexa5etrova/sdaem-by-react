import cn from "classnames";
import styles from "./SearchContainer.module.scss";

const SearchContainer = ({ children, stl }) => {
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
