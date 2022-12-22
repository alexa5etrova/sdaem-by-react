import HomeIcon from "assets/icons/HomeIcon";
import { Link } from "react-router-dom";


import styles from "./Breadcrumbs.module.scss";


const Breadcrumbs = ({ crumbs }) => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to="/">
          <HomeIcon />
        </Link>
      </li>
      {crumbs.map((crumb) => (
        <li key={crumb.id}>
          <Link to={crumb.url}>{crumb.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
