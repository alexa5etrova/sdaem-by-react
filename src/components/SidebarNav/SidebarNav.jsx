import { useState } from "react";
import LinkTag from "../LinkTag/LinkTag";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";

import { COTTAGES_CATEGORIES, FLAT_CATEGORIES, POPULAR } from "./../../data/nav";
import styles from "./SidebarNav.module.scss";
import Htag from "./../Htag/Htag";

const SidebarNav = () => {
  const [showMoreCottages, setShowMoreCottages] = useState(false);

  return (
    <div className={styles.sidebar}>
      <div className={styles.navSection}>
        <LinkTag linkStyle="black" to="/flats">
          Квартиры
        </LinkTag>
        {FLAT_CATEGORIES.map((city) => (
          <div key={city.id} className={styles.row}>
            <LinkTag to={city.path} linkStyle="yellow">
              {city.name}
            </LinkTag>
            <div className={styles.total}>{city.total}</div>
          </div>
        ))}
      </div>

      <div className={styles.navSection}>
        <LinkTag linkStyle="black" to="/flats">
          Коттеджи и усадьбы
        </LinkTag>
        {COTTAGES_CATEGORIES.slice(0, 4).map((cat) => (
          <div key={cat.id} className={styles.row}>
            <LinkTag to={cat.path} linkStyle="yellow">
              {cat.name}
            </LinkTag>
            <div className={styles.total}>{cat.total}</div>
          </div>
        ))}
        {COTTAGES_CATEGORIES.length > 4 && (
          <div className={styles.more} onClick={() => setShowMoreCottages((prev) => !prev)}>
            Еще
          </div>
        )}
        {showMoreCottages &&
          COTTAGES_CATEGORIES.slice(4).map((cat) => (
            <div key={cat.id} className={styles.row}>
              <LinkTag to={cat.path} linkStyle="yellow">
                {cat.name}
              </LinkTag>
              <div className={styles.total}>{cat.total}</div>
            </div>
          ))}
      </div>
      {!showMoreCottages && (
        <div className={styles.navSection}>
          <Htag tag="h3bigger">Популярные направления</Htag>
          {POPULAR.map((collection) => (
            <div key={collection.id} className={styles.row}>
              <LinkTag to={collection.path} linkStyle="yellow">
                {collection.name}
              </LinkTag>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
