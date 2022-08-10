import cn from "classnames";
import { CATEGORIES } from "../../../data/nav";
import { CategoryBtnsProps } from "./CategoryBtns.props";

import styles from "./CategoryBtns.module.scss";
import { CategoriesModel } from "../../../interfaces/menu.interface";

const CategoryBtns = ({ category, setCategory }: CategoryBtnsProps): JSX.Element => {
  return (
    <div className={styles.btnGroup}>
      {CATEGORIES.map((item: CategoriesModel) =>
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
