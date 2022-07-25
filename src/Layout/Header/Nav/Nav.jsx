import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "./../../../components/Button/Button";
import Dropdown from "./../../../components/Dropdown/Dropdown";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import logo from "./../../../assets/images/logo.png";
import { CATEGORIES, FLAT_CATEGORIES } from "../../../data/const";

import styles from "./Nav.module.scss";

const Nav = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const openMenu = () => setIsMenuShown(true);
  const closeMenu = () => setIsMenuShown(false);

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={styles.headerNavList}>
          {CATEGORIES.map(function (item) {
            if (item.name === "Квартиры") {
              return (
                <li
                  className={styles.flats}
                  key={item.id}
                  onMouseEnter={() => openMenu()}
                  onMouseLeave={() => closeMenu()}
                >
                  <Link to={item.path} className={styles.flatsLinks}>
                    Квартиры на сутки
                    <LocationIcon width="12" className={styles.locationIcon} />
                  </Link>
                  {isMenuShown && (
                    <Dropdown
                      links={FLAT_CATEGORIES}
                      isMenuShown={isMenuShown}
                      openMenu={openMenu}
                      closeMenu={closeMenu}
                    />
                  )}
                </li>
              );
            } else {
              return (
                <li className={styles.headerNavListItem} key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            }
          })}
        </ul>

        <Button btnStyle="gradient">+ Разместить объявление</Button>
      </div>
    </nav>
  );
};

export default Nav;
