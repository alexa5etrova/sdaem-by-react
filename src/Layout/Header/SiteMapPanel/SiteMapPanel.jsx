import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { ReactComponent as HeartIcon } from "../../../assets/icons/heart.svg";

import styles from "./SiteMapPanel.module.scss";
import { Link } from "react-router-dom";
import cn from "classnames";
import { SiteMapData } from "../../../data/Navdata";

const SiteMapPanel = () => {
  return (
    <div className={styles.siteMapPanel}>
      {" "}
      <div className={styles.siteMapPanelContainer}>
        <nav>
          <ul className={styles.navHeader}>
            {SiteMapData.map(function (item) {
              if (item.name === "Объявления на карте") {
                return (
                  <li className={styles.navHeaderItem} key={item.id}>
                    <Link to={item.path}>
                      <LocationIcon width="9" className={styles.locationIcon} />
                      {item.name}
                    </Link>
                  </li>
                );
              } else {
                return (
                  <li className={styles.navHeaderItem} key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              }
            })}
          </ul>
        </nav>
        <ul className={styles.navHeader}>
          <li className={styles.navHeaderItem}>
            <Link to="/favorite">
              Закладки <HeartIcon width="16" className={styles.heartIcon} />
            </Link>
          </li>
          <li className={cn(styles.navHeaderItem, styles.authLink)}>
            <Link to="/auth">Вход и регистрация</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMapPanel;
