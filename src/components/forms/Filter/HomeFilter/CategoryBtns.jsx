import cn from "classnames";
import { CATEGORIES } from "./../../../../data/nav";

import styles from "./CategoryBtns.module.scss";

const CategoryBtns = ({ category, setCategory }) => {
  return (
    <div className={styles.btnGroup}>
      {CATEGORIES.map((item) =>
        item.value === "flats" ? (
          <div
            className={cn(styles.btn, { [styles.btnActive]: item.value === category })}
            key={item.id}
            onClick={() => setCategory(item.value)}
          >
            Квартиры на сутки
          </div>
        ) : (
          <div
            className={cn(styles.btn, { [styles.btnActive]: item.value === category })}
            key={item.id}
            onClick={() => setCategory(item.value)}
          >
            {item.name}
          </div>
        )
      )}
    </div>
  );
};

export default CategoryBtns;
