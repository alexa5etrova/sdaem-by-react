import { useState } from "react";
import HomeFilter from "./HomeFilter/HomeFilter";
import styles from "./Filter.module.scss";
import FlatsFilter from "./FlatsFilter/FlatsFilter";
import CategoryBtns from "./HomeFilter/CategoryBtns";

const Filter = ({ page }) => {
  const [category, setCategory] = useState("flats");

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
        <CategoryBtns category={category} setCategory={setCategory} />
        <div className={styles.filterHome}>
          {category === "flats" && <HomeFilter />}
          {category === "cottages" && <p>Здесь будет фильтр для коттеджей</p>}
          {category === "cars" && <p>Здесь будет фильтр для машин</p>}
          {category === "saunas" && <p>Здесь будет фильтр для бань</p>}
        </div>
      </div>
    );
  }
};

export default Filter;
