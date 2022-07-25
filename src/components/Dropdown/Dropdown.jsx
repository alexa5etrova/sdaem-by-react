import { Link } from "react-router-dom";

import styles from "./Dropdown.module.scss";

const Dropdown = (props) => {
  return (
    <ul className={styles.dropdownList}>
      {props.links.map((item) => (
        <li className={styles.dropdownListItem} key={item.id}>
          <Link to={item.path} className={styles.dropdownLinks} onClick={() => props.closeMenu}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
