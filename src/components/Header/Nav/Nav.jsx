import styles from "./Nav.module.scss";
import logo from "./../../../assets/images/logo.png";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { ReactComponent as LocationIcon } from "../../../assets/icons/location.svg";
import { useState } from "react";
import Dropdown from "../../Dropdown/Dropdown";
import { Navdata } from "../../../data/Navdata";
import { FlatNavData } from "./../../../data/Navdata";

const Nav = (props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContainer}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={styles.headerNavList}>
          {Navdata.map(function (item) {
            if (item.name === "Квартиры") {
              return (
                <li
                  className={styles.headerNavListItem}
                  key={item.id}
                  onMouseEnter={() => setIsMenuShown(true)}
                  onMouseLeave={() => setIsMenuShown(false)}
                >
                  <Link to={item.path}>
                    Квартиры на сутки
                    <LocationIcon
                      width="12"
                      className={styles.locationIcon}
                    />{" "}
                    {isMenuShown && (
                      <Dropdown links={FlatNavData} isShowen={true} />
                    )}
                  </Link>
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
