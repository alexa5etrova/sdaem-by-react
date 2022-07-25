import Select from "./Select/Select";
import { CITIES, ROOMS } from "./../../data/flats";

import styles from "./Filter.module.scss";

const Filter = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <Select choise={CITIES} label="Город" name="city" id="city" />
        <Select choise={ROOMS} label="Комнаты" name="rooms" id="rooms" />
      </div>
    </div>
  );
};

export default Filter;
