import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "./../../Button/Button";
import Select from "./../Select/Select";
import Checkbox from "./../Checkbox/Checkbox";
import { CITIES, ROOMS, SLEEPING_PLACES, DISTRICT, METRO, EQUIPMENT } from "./../../../data/flats";
import { ReactComponent as LocationIcon } from "./../../../assets/icons/location.svg";
import { ReactComponent as SetupIcon } from "./../../../assets/icons/setup.svg";
import { ReactComponent as ArrowIcon } from "./../../../assets/icons/chevron.svg";

import styles from "./Filter.module.scss";

const Filter = (props) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleFilter = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filter}>
        <Formik
          initialValues={{
            city: "",
            rooms: "",
            priceMin: "",
            priceMax: "",
            places: "",
            district: "",
            metro: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            // добавить линк на результаты +передать фильтр через редакс
          }}
        >
          {(formik) => (
            <Form className={styles.filterForm}>
              <Select choise={CITIES} label="Город" name="city" id="city" />
              <Select choise={ROOMS} label="Комнаты" name="rooms" id="rooms" />
              <div className={styles.priceWrapper}>
                <label htmlFor="price" className={styles.label}>
                  Цена за сутки (BYN)
                </label>
                <div id="price">
                  <Field type="number" className={styles.price} name="priceMin" placeholder="От" />
                  <span className={styles.text}>-</span>
                  <Field type="number" className={styles.price} name="priceMax" placeholder="До" />
                </div>
              </div>
              <p className={styles.toMap} onClick={toggleFilter}>
                Больше опций
                <SetupIcon width="18" height="18" className={styles.icon} />
              </p>
              <Link to="/map" className={styles.toMap}>
                На карте <LocationIcon width="12" height="15" className={styles.icon} />
              </Link>
              <Button type="submit" btnStyle="filter">
                Показать
                <ArrowIcon width="7" height="11" className={styles.toFlatsIcon} />
              </Button>

              {showOptions && (
                <div className={styles.moreOptions}>
                  <div className={styles.moreSelect}>
                    <Select
                      choise={SLEEPING_PLACES}
                      label="Спальные места"
                      name="places"
                      id="places"
                    />
                    <Select choise={DISTRICT} label="Район" name="district" id="district" />
                    <Select choise={METRO} label="Метро" name="metro" id="metro" />
                  </div>
                  <div
                    role="group"
                    aria-labelledby="checkbox-group"
                    className={styles.moreEquipment}
                  >
                    {EQUIPMENT.map((item) => (
                      <Checkbox
                        name="checked"
                        key={item.id}
                        title={item.title}
                        value={item.value}
                        isChecked={
                          formik.values.checked ? formik.values.checked.includes(item.value) : false
                        }
                      />
                    ))}
                  </div>
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Filter;
