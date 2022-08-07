import cn from "classnames";

import styles from "./FilterContainer.module.scss";

const FilterContainer = ({ children, page }) => {
  return (
    <div
      className={cn({
        [styles.wrapperHome]: page === "home",
        [styles.wrapperFlats]: page === "flats",
      })}
    >
      <div
        className={cn({
          [styles.filterHome]: page === "home",
          [styles.filterFlats]: page === "flats",
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default FilterContainer;
