import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { ReactComponent as Home } from "../../assets/icons/home.svg";

const Breadcrumbs = (props) => {
  let crumbs = props.crumbs;
  return (
    <nav className={styles.breadcrumbs}>
      <Link to="/">
        <Home />
      </Link>
      {crumbs.map((crumb) => (
        <>
          <span>&bull;</span>
          <Link to={crumb.url}>{crumb.title}</Link>
        </>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
