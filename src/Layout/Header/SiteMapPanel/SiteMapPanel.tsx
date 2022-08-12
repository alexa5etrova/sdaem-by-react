import { Link } from "react-router-dom";
import cn from "classnames";
import { useAppSelector } from "../../../hook/redux";
import { SITEMAP } from "../../../data/nav";

import styles from "./SiteMapPanel.module.scss";
import LocationIcon from "../../../assets/icons/LocationIcon";
import HeartIcon from "../../../assets/icons/Heart";
import ChevronIcon from "./../../../assets/icons/Chevron";
import { SiteMapProps } from "./SiteMap.props";

const SiteMapPanel = (props: SiteMapProps): JSX.Element => {
  const { user, isAuth } = useAppSelector((state) => state.auth);

  return (
    <div className={styles.siteMapPanel}>
      <div className={styles.siteMapPanelContainer}>
        <nav>
          <ul className={styles.navHeader}>
            {SITEMAP.map(function (item) {
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
        <ul className={styles.accountLink}>
          <li className={styles.navHeaderItem}>
            <Link to="/favorite">
              Закладки <HeartIcon width="16" className={styles.heartIcon} />
            </Link>
          </li>
          <li className={cn(styles.navHeaderItem, styles.authLink)}>
            {!isAuth && <Link to="/auth">Вход и регистрация</Link>}
            {isAuth && (
              <Link to="/settings">
                {user.login}
                <ChevronIcon className={styles.arrow} width="10" height="12" />
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMapPanel;
