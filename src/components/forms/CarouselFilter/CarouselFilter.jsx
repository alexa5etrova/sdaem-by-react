import { useRef } from "react";
import ChevronIcon from "assets/icons/ChevronIcon";
import MetroIcon from "assets/icons/MetroIcon";
import cn from "classnames";

import SearchContainer from "components/forms/SearchContainer/SearchContainer";
import { DISTRICT, METRO } from "data/flats";


import styles from "./CarouselFilter.module.scss";


const CarouselFilter = ({ setDistrict, setMetro }) => {
  const metroRef = useRef();
  const districtRef = useRef();

  const handleMetroChange = () => {
    let metro = metroRef.current.value;
    metro === "Метро" ? setMetro("") : setMetro(metro);
    setDistrict("");
    districtRef.current.value = "Район";
  };
  const handleDistrictChange = () => {
    let district = districtRef.current.value;
    district === "Район" ? setDistrict("") : setDistrict(district);
    setMetro("");
    metroRef.current.value = "Метро";
  };

  return (
    <SearchContainer stl="carousel">
      <div className={styles.selectContainer}>
        <div className={styles.selectWrapper}>
          <span className={styles.selectArrow}>
            <ChevronIcon width="18" />
          </span>
          <MetroIcon width="20" height="13" className={styles.metroIcon} />
          <select
            className={cn(styles.select, styles.metroSelect)}
            name="metro"
            onChange={() => handleMetroChange()}
            ref={metroRef}
          >
            <option className={styles.option} defaultValue>
              Метро
            </option>
            {METRO.map((item) => (
              <option className={styles.option} key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <span className={styles.selectArrow}>
            <ChevronIcon width="18" />
          </span>

          <select
            className={styles.select}
            name="district"
            onChange={() => handleDistrictChange()}
            ref={districtRef}
          >
            <option className={styles.option} defaultValue>
              Район
            </option>
            {DISTRICT.map((item) => (
              <option className={styles.option} key={item.id} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </SearchContainer>
  );
};

export default CarouselFilter;
