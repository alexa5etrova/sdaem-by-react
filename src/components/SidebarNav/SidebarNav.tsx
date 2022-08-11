import { useState } from "react";
import cn from "classnames";
import { COTTAGES_CATEGORIES, FLAT_CATEGORIES, POPULAR } from "../../data/nav";
import { SidebarNavProps } from "./SidebarNav.props";
import LinkTag from "../LinkTag/LinkTag";
import Htag from "../Htag/Htag";
import styles from "./SidebarNav.module.scss";

const SidebarNav = (props: SidebarNavProps): JSX.Element => {
  const [showMoreCottages, setShowMoreCottages] = useState<boolean>(false);

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

      <div className={cn(styles.navSection, styles.cottagesMg)}>
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
        <div className={cn(styles.navSection, styles.popularMg)}>
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
