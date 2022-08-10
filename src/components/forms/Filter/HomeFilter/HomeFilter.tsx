import { Form, Formik, Field } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";

import Button from "../../../Button/Button";
import Select from "../../Select/Select";
import Checkbox from "../../Checkbox/Checkbox";
import { CITIES, ROOMS, SLEEPING_PLACES, DISTRICT, METRO, EQUIPMENT } from "../../../../data/flats";
import LocationIcon from "./../../../../assets/icons/location.svg";
import SetupIcon from "./../../../../assets/icons/setup.svg";
import ArrowIcon from "./../../../../assets/icons/chevron.svg";
import { HomeFilterProps } from "./HomeFilter.props";
import { FilterValues } from "../../../../interfaces/filter.interface";

import styles from "./HomeFilter.module.scss";

const HomeFilter = ({ ...props }: HomeFilterProps): JSX.Element => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
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
      onSubmit={(values: FilterValues) => {
        const { city, rooms, priceMin, priceMax, district, metro, checked } = values;
        let searchArr: string[] = [];
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
            <Select page="home" choise={CITIES} label="Город" name="city" id="city" />
          </div>

          <div className={styles.formSection}>
            <Select page="home" choise={ROOMS} label="Комнаты" name="rooms" id="rooms" />
          </div>

          <div className={cn(styles.priceWrapper, styles.formSection)}>
            <label htmlFor="price" className={styles.label}>
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
            <ArrowIcon width="7" height="11" className={styles.toFlatsIcon} />
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
