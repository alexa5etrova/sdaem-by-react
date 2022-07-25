import styles from "./Select.module.scss";

import { ReactComponent as Arrow } from "./chevronDown.svg";

const Select = ({ label, name, id, choise }) => {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <span className={styles.selectArrow}>
        <Arrow width="18" />
      </span>
      <select id={id} className={styles.select} name={name}>
        <option className={styles.option} selected>
          Выберите
        </option>
        {choise.map((item) => (
          <option className={styles.option} key={item.id} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
