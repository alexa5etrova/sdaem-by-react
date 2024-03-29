import ChevronIcon from "assets/icons/ChevronIcon";
import cn from "classnames";
import { Link } from "react-router-dom";


import styles from "./LinkTag.module.scss";


const LinkTag = ({ children, linkStyle, to, ...props }) => {
  switch (linkStyle) {
    case "violet":
      return (
        <Link to={to} {...props} className={cn(styles.link, styles.violet)}>
          {children}
        </Link>
      );
    case "lightViolet":
      return (
        <Link to={to} {...props} className={cn(styles.link, styles.lightViolet)}>
          {children}
        </Link>
      );
    case "reccomend":
      return (
        <Link to={to} {...props} className={cn(styles.link, styles.reccomend)}>
          {children}
        </Link>
      );
    case "roundArrow":
      return (
        <Link to={to} className={styles.round} {...props}>
          <ChevronIcon width="10" height="16" className={styles.icon} color="white" />
        </Link>
      );
    case "black":
      return (
        <Link to={to} className={cn(styles.link, styles.black)} {...props}>
          {children}
        </Link>
      );
    case "yellow":
      return (
        <Link to={to} className={cn(styles.link, styles.yellow)} {...props}>
          {children}
        </Link>
      );
    case "lightYellow":
      return (
        <Link to={to} className={cn(styles.link, styles.lightYellow)} {...props}>
          {children}
        </Link>
      );
    case "gradientHome":
      return (
        <Link to={to} className={cn(styles.link, styles.gradientHome)} {...props}>
          {children}
        </Link>
      );
    case "white":
      return (
        <Link to={to} className={cn(styles.link, styles.white)} {...props}>
          {children}
        </Link>
      );
    case "yellowBtn":
      return (
        <Link to={to} className={cn(styles.link, styles.yellowBtn)} {...props}>
          {children}
        </Link>
      );
    case "newsList":
      return (
        <Link to={to} className={cn(styles.link, styles.newsList)} {...props}>
          {children}
        </Link>
      );
    case "newsSeeAll":
      return (
        <Link to={to} className={cn(styles.link, styles.newsSeeAll)} {...props}>
          {children}
        </Link>
      );
    case "whiteToMap":
      return (
        <Link to={to} className={cn(styles.link, styles.whiteToMap)} {...props}>
          {children}
        </Link>
      );
    default:
      return <></>;
  }
};

export default LinkTag;
