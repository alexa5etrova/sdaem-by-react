import React, { useRef, useEffect } from "react";
import cn from "classnames";
import { CarouselFilterProps } from "./CarouselFilter.props";
import { DISTRICT, METRO } from "../../../data/flats";
import SearchContainer from "../SearchContainer/SearchContainer";
import Arrow from "./chevronDown.svg";
import MetroIcon from "./../../../assets/icons/metro.svg";
import styles from "./CarouselFilter.module.scss";

const CarouselFilter = ({ setDistrict, setMetro }: CarouselFilterProps): JSX.Element => {
  const metroRef = useRef<HTMLSelectElement>(null);
  const districtRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    districtRef.current!.value = "Район";
    metroRef.current!.value = "Метро";
  }, []);

  const handleMetroChange = () => {
    if (metroRef.current !== null) {
      let metro = metroRef.current.value;
      metro === "Метро" ? setMetro("") : setMetro(metro);
      setDistrict("");
      districtRef.current!.value = "Район";
    }
  };
  const handleDistrictChange = () => {
    if (districtRef.current !== null) {
      let district = districtRef.current.value;
      district === "Район" ? setDistrict("") : setDistrict(district);
      setMetro("");
      metroRef.current!.value = "Метро";
    }
  };

  return (
    <SearchContainer stl="carousel">
      <div className={styles.selectContainer}>
        <div className={styles.selectWrapper}>
          <span className={styles.selectArrow}>
            <Arrow width="18" />
          </span>
          <MetroIcon width="20" height="13" className={styles.metroIcon} />
          <select
            className={cn(styles.select, styles.metroSelect)}
            name="metro"
            onChange={() => handleMetroChange()}
            ref={metroRef}
          >
            <option className={styles.option} value="Метро">
              Метро
            </option>
            {METRO.map((item) => (
              <option className={styles.option} key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.selectWrapper}>
          <span className={styles.selectArrow}>
            <Arrow width="18" />
          </span>

          <select
            className={styles.select}
            name="district"
            onChange={() => handleDistrictChange()}
            ref={districtRef}
          >
            <option className={styles.option} value="Район">
              Район
            </option>
            {DISTRICT.map((item) => (
              <option className={styles.option} key={item.id} value={item.name}>
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
