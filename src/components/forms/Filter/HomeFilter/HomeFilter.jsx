import { useState } from "react";
import ChevronIcon from "assets/icons/ChevronIcon";
import LocationIcon from "assets/icons/LocationIcon";
import SetupIcon from "assets/icons/SetupIcon";

import cn from "classnames";
import Button from "components/Button/Button";
import Checkbox from "components/forms/Checkbox/Checkbox";
import Select from "components/forms/Select/Select";

import { CITIES, ROOMS, SLEEPING_PLACES, DISTRICT, METRO, EQUIPMENT } from "data/flats";
import { Form, Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";

import styles from "./HomeFilter.module.scss";


const HomeFilter = ({ page }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  const toggleFilter = () => {
    setShowOptions((prev) => !prev);
  };

  return (
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
        const { city, rooms, priceMin, priceMax, district, metro, checked } = values;
        let searchArr = [];
        if (city !== "") {
          searchArr.push(`city=${city}`);
        }
        if (rooms !== "") {
          searchArr.push(`rooms=${rooms}`);
        }
        if (priceMin !== "") {
          searchArr.push(`price_gte=${priceMin}`);
        }
        if (priceMax !== "") {
          searchArr.push(`price_lte=${priceMax}`);
        }
        if (district !== "") {
          searchArr.push(`district=${district}`);
        }
        if (metro !== "") {
          searchArr.push(`metro=${metro}`);
        }
        if (checked) {
          checked.map((item) => searchArr.push(`equipment.${item}=true`));
        }

        let search = `?${searchArr.join("&")}`;
        navigate(`/flats${search}`);
      }}
    >
      {(formik) => (
        <Form className={styles.filterForm}>
          <div className={styles.formSection}>
            <Select page={page} choise={CITIES} label="Город" name="city" id="city" />
          </div>

          <div className={styles.formSection}>
            <Select page={page} choise={ROOMS} label="Комнаты" name="rooms" id="rooms" />
          </div>

          <div className={cn(styles.priceWrapper, styles.formSection)}>
            <label
              htmlFor="price"
              className={cn(styles.label, { [styles.violet]: page === "flats" })}
            >
              Цена за сутки (BYN)
            </label>
            <div id="price">
              <Field type="number" className={styles.price} name="priceMin" placeholder="От" />
              <span className={styles.text}>-</span>
              <Field type="number" className={styles.price} name="priceMax" placeholder="До" />
            </div>
          </div>
          <div className={styles.formSectionToMap}>
            <p className={styles.toMap} onClick={toggleFilter}>
              Больше опций
              <SetupIcon width="18" height="18" className={styles.icon} />
            </p>
          </div>

          <Link to="/map" className={styles.toMap}>
            На карте <LocationIcon width="12" height="15" className={styles.icon} />
          </Link>

          <Button type="submit" btnStyle="filter">
            Показать
            <ChevronIcon width="7" height="11" className={styles.toFlatsIcon} />
          </Button>

          {showOptions && (
            <div className={styles.moreOptions}>
              <div className={styles.moreSelect}>
                <Select choise={SLEEPING_PLACES} label="Спальные места" name="places" id="places" />
                <Select choise={DISTRICT} label="Район" name="district" id="district" />
                <Select choise={METRO} label="Метро" name="metro" id="metro" />
              </div>
              <div role="group" aria-labelledby="checkbox-group" className={styles.moreEquipment}>
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
  );
};

export default HomeFilter;
