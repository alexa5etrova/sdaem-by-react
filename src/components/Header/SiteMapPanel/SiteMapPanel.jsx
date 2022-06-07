import { ReactComponent as LocationIcon } from "../../Icons/location.svg";
import styles from "./SiteMapPanel.module.scss";

const SiteMapData = [
  { name: "Главная", id: 1, href: "#" },
  { name: "Новости", id: 2, href: "#" },
  { name: "Размещение и тарифы", id: 3, href: "#" },
  {
    name: "Объявления на карте",
    id: 4,
    href: "#",
  },
  { name: "Контакты", id: 5, href: "#" },
];

const SiteMapPanel = () => {
  return (
    <div>
      <nav>
        <ul className={styles.navHeader}>
          {SiteMapData.map(function (item) {
            if (item.name === "Объявления на карте") {
              return (
                <li className={styles.navHeaderItem} key={item.id}>
                  <a href={item.href}>
                    <LocationIcon width="9" className={styles.locationIcon} />{" "}
                    {item.name}
                  </a>
                </li>
              );
            } else {
              return (
                <li className={styles.navHeaderItem} key={item.id}>
                  <a href={item.href}>{item.name}</a>
                </li>
              );
            }
          })}
        </ul>
      </nav>

      <div>
        <ul>
          <li>
            <a href="">Закладки</a>
          </li>
          <li>
            <a href=""></a>Вход и регистрация
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMapPanel;
