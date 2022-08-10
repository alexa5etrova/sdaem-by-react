import { useState } from "react";
import HomeFilter from "./HomeFilter/HomeFilter";
import FlatsFilter from "./FlatsFilter/FlatsFilter";
import CategoryBtns from "./CategoryBtns";
import { FilterProps } from "./Filter.props";
import styles from "./Filter.module.scss";

const Filter = ({ page }: FilterProps): JSX.Element => {
  const [category, setCategory] = useState<"flats" | "cottages" | "cars" | "saunas">("flats");

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
  return <></>;
};

export default Filter;
