import { Field } from "formik";
import { ReactComponent as Arrow } from "./chevronDown.svg";

import cn from "classnames";
import styles from "./Select.module.scss";

const Select = ({ label, name, id, choise, page }) => {
  return (
    <div className={cn(styles.selectWrapper, { [styles.selectWrapperFlats]: page === "flats" })}>
      {label !== "none" ? (
        <label htmlFor={id} className={cn(styles.label, { [styles.violet]: page === "flats" })}>
          {label}
        </label>
      ) : null}
      <span className={cn(styles.selectArrow, { [styles.flatSelectArrow]: page === "flats" })}>
        <Arrow width="18" />
      </span>
      <Field as="select" id={id} className={styles.select} name={name}>
        <option className={styles.option} defaultValue>
          Выберите
        </option>
        {choise.map((item) => (
          <option className={styles.option} key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default Select;
