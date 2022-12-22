import { useState } from "react";
import ChevronIcon from "assets/icons/ChevronIcon";
import SetupIcon from "assets/icons/SetupIcon";
import cn from "classnames";

import Button from "components/Button/Button";
import Checkbox from "components/forms/Checkbox/Checkbox";
import Select from "components/forms/Select/Select";
import { ROOMS, SLEEPING_PLACES, DISTRICT, METRO, EQUIPMENT } from "data/flats";

import { Form, Formik, Field } from "formik";
import { useNavigate, useLocation } from "react-router-dom";


import styles from "./FlatsFilter.module.scss";


const FlatsFilter = ({ page }) => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const url = useLocation();

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

        let search = `&${searchArr.join("&")}`;
        navigate(url.search + search);
      }}
    >
      {(formik) => (
        <Form className={styles.filter}>
          <div className={styles.filterFormFlats}>
            <div className={styles.formSectionFlat}>
              <Select
                page={"flats"}
                labelStl="violet"
                choise={ROOMS}
                label="Комнаты"
                name="rooms"
                id="rooms"
              />
            </div>
            <div className={cn(styles.priceWrapperFlats, styles.formSectionFlat)}>
              <label htmlFor="price" className={styles.violet}>
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
            <Button type="button" onClick={() => navigate("/flats")} btnStyle="disable">
              Очистить
            </Button>
            <Button type="submit" btnStyle="violet">
              Показать объекты
              <ChevronIcon width="7" height="11" className={styles.toFlatsIconWhite} />
            </Button>
          </div>

          {showOptions && (
            <div className={styles.moreOptionsFlats}>
              <div className={styles.moreSelect}>
                <Select
                  labelStl="violet"
                  choise={SLEEPING_PLACES}
                  label="Спальные места"
                  name="places"
                  id="places"
                />
                <Select
                  labelStl="violet"
                  choise={DISTRICT}
                  label="Район"
                  name="district"
                  id="district"
                />
                <Select labelStl="violet" choise={METRO} label="Метро" name="metro" id="metro" />
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

export default FlatsFilter;
