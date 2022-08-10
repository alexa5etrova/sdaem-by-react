import React from "react";
import { Link } from "react-router-dom";

import styles from "./Dropdown.module.scss";
import { DropdownProps } from "./Dropdown.props";

const Dropdown = ({ links, closeMenu }: DropdownProps): JSX.Element => {
  return (
    <ul className={styles.dropdownList}>
      {links.map((item) => (
        <li className={styles.dropdownListItem} key={item.id}>
          <Link to={item.path} className={styles.dropdownLinks} onClick={() => closeMenu}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
