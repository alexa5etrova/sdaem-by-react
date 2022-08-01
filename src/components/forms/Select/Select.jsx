import { Field } from "formik";
import { ReactComponent as Arrow } from "./chevronDown.svg";

import styles from "./Select.module.scss";

const Select = ({ label, name, id, choise }) => {
  return (
    <div className={styles.selectWrapper}>
      {label !== "none" ? (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      ) : null}

      <span className={styles.selectArrow}>
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
