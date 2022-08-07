import { Form, Formik, Field } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";

import FilterContainer from "./FilterContainer/FilterContainer";
import Button from "./../../Button/Button";
import Select from "./../Select/Select";
import Checkbox from "./../Checkbox/Checkbox";
import { CITIES, ROOMS, SLEEPING_PLACES, DISTRICT, METRO, EQUIPMENT } from "./../../../data/flats";
import { ReactComponent as LocationIcon } from "./../../../assets/icons/location.svg";
import { ReactComponent as SetupIcon } from "./../../../assets/icons/setup.svg";
import { ReactComponent as ArrowIcon } from "./../../../assets/icons/chevron.svg";

import styles from "./Filter.module.scss";

const Filter = ({ page }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const url = useLocation();

  const toggleFilter = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <FilterContainer page={page}>
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
          if (page === "home") {
            navigate(`/flats${search}`);
          } else {
            navigate(url.search + search);
          }
        }}
      >
        {(formik) => (
          <Form className={cn(styles.filterForm, { [styles.filterFormFlats]: page === "flats" })}>
            {page === "home" && (
              <div
                className={cn(styles.formSection, { [styles.formSectionFlat]: page === "flats" })}
              >
                <Select page={page} choise={CITIES} label="Город" name="city" id="city" />
              </div>
            )}

            <div className={cn(styles.formSection, { [styles.formSectionFlat]: page === "flats" })}>
              <Select page={page} choise={ROOMS} label="Комнаты" name="rooms" id="rooms" />
            </div>
            <div
              className={cn(styles.priceWrapper, styles.formSection, {
                [styles.priceWrapperFlats]: page === "flats",
                [styles.formSectionFlat]: page === "flats",
              })}
            >
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
            {page === "home" && (
              <Link to="/map" className={styles.toMap}>
                На карте <LocationIcon width="12" height="15" className={styles.icon} />
              </Link>
            )}
            {page === "flats" && (
              <Button type="button" onClick={() => navigate("/flats")} btnStyle="disable">
                Очистить
              </Button>
            )}
            {page === "home" ? (
              <Button type="submit" btnStyle="filter">
                Показать
                <ArrowIcon width="7" height="11" className={styles.toFlatsIcon} />
              </Button>
            ) : (
              <Button type="submit" btnStyle="violet">
                Показать объекты
                <ArrowIcon width="7" height="11" className={styles.toFlatsIconWhite} />
              </Button>
            )}

            {showOptions && (
              <div
                className={cn({
                  [styles.moreOptionsFlats]: page === "flats",
                  [styles.moreOptions]: page === "home",
                })}
              >
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
    </FilterContainer>
  );
};

export default Filter;
