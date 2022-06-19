import { ReactComponent as LocationIcon } from "../../Icons/location.svg";

import styles from "./SiteMapPanel.module.scss";
import { Link } from "react-router-dom";

const SiteMapData = [
  { name: "Главная", id: 1, path: "/" },
  { name: "Новости", id: 2, path: "/news" },
  { name: "Размещение и тарифы", id: 3, path: "/add" },
  {
    name: "Объявления на карте",
    id: 4,
    path: "/map",
  },
  { name: "Контакты", id: 5, path: "/contacts" },
];

const SiteMapPanel = () => {
  return (
    <div className={styles.siteMapPanelContainer}>
      <nav>
        <ul className={styles.navHeader}>
          {SiteMapData.map(function (item) {
            if (item.name === "Объявления на карте") {
              return (
                <li className={styles.navHeaderItem} key={item.id}>
                  <Link to={item.path}>
                    <LocationIcon width="9" className={styles.locationIcon} />{" "}
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
    </div>
  );
};

export default SiteMapPanel;
