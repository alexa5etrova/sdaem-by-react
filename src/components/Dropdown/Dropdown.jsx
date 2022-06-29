import styles from "./Dropdown.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import cn from "classnames";

const Dropdown = (props) => {
  const [isDropdown, setIsDropdown] = useState(props.isShowen);

  return (<ul
      className={cn(styles.dropdownList, {
        [styles.closed]: !isDropdown,
      })}
      onClick={() => setIsDropdown(!isDropdown)}
    >
      {props.links.map((item) => (
        <li className={styles.dropdownListItem} key={item.id}>
          <Link to={item.path} onClick={() => setIsDropdown(false)}>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
