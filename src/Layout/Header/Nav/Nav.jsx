import { useState, useEffect } from "react";

import LocationIcon from "assets/icons/LocationIcon";
import logo from "assets/images/logo.png";
import Button from "components/Button/Button";
import Dropdown from "components/Dropdown/Dropdown";
import { CATEGORIES, FLAT_CATEGORIES } from "data/nav";

import { Link, useLocation } from "react-router-dom";

import styles from "./Nav.module.scss";


const Nav = (props) => {
  const url = useLocation();
  const [isMenuShown, setIsMenuShown] = useState(false);
  const [showenCategory, setShowenCategory] = useState("Квартиры на сутки");

  const openMenu = () => setIsMenuShown(true);
  const closeMenu = () => setIsMenuShown(false);

  useEffect(() => {
    let category = FLAT_CATEGORIES.filter((item) => url.search.includes(item.path.slice(7)));
    category.length !== 0
      ? setShowenCategory(category[0].name)
      : setShowenCategory("Квартиры на сутки");
  }, [url]);

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContainer}>
        {url.pathname !== "/" ? (
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        ) : (
          <div>
            <img src={logo} alt="logo" />
          </div>
        )}

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
                    {showenCategory}
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
