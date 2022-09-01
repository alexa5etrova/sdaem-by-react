import Htag from "./../../Htag/Htag";
import LinkTag from "./../../LinkTag/LinkTag";
import { CITIES } from "./../../../data/flats";
import styles from "./FlatsLinksHome.module.scss";

const FlatsLinksHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <Htag tag="homeViolet">Снять квартиру</Htag>
          <Htag tag="h2white">Квартиры на сутки</Htag>
          <div className={styles.links}>
            {CITIES.map((city) => (
              <LinkTag key={city.id} linkStyle="violet" to={`/flats?city=${city.value}`}>
                {city.name}
              </LinkTag>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatsLinksHome;
