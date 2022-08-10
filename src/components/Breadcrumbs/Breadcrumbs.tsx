import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { BreadcrumbsProps } from "./Breadcrumbs.props";

const Breadcrumbs = ({ crumbs }: BreadcrumbsProps): JSX.Element => {
  return (
    <ul className={styles.breadcrumbs}>
      <li>
        <Link to="/">
          <Home />
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
