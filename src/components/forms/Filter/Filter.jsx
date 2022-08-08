import HomeFilter from "./HomeFilter/HomeFilter";
import styles from "./Filter.module.scss";
import FlatsFilter from "./FlatsFilter/FlatsFilter";

const Filter = ({ page }) => {
  if (page === "flats") {
    return (
      <div className={styles.wrapperFlats}>
        <div className={styles.filterFlats}>
          <FlatsFilter />
        </div>
      </div>
    );
  }
  if (page === "home") {
    return (
      <div className={styles.wrapperHome}>
        <div className={styles.filterHome}>
          <HomeFilter />
        </div>
      </div>
    );
  }
};

export default Filter;
