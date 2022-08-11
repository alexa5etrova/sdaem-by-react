import cn from "classnames";
import { Link } from "react-router-dom";
import ChevronIcon from "../../assets/icons/chevron.svg";
import styles from "./LinkTag.module.scss";
import { LinkTagProps } from "./LinkTag.props";

const LinkTag = ({ children, linkStyle, to }: LinkTagProps): JSX.Element => {
  switch (linkStyle) {
    case "violet":
      return (
        <Link to={to} className={cn(styles.link, styles.violet)}>
          {children}
        </Link>
      );
    case "lightViolet":
      return (
        <Link to={to} className={cn(styles.link, styles.lightViolet)}>
          {children}
        </Link>
      );
    case "reccomend":
      return (
        <Link to={to} className={cn(styles.link, styles.reccomend)}>
          {children}
        </Link>
      );
    case "roundArrow":
      return (
        <Link to={to} className={styles.round}>
          <ChevronIcon width="10" height="16" className={styles.icon} />
        </Link>
      );
    case "black":
      return (
        <Link to={to} className={cn(styles.link, styles.black)}>
          {children}
        </Link>
      );
    case "yellow":
      return (
        <Link to={to} className={cn(styles.link, styles.yellow)}>
          {children}
        </Link>
      );
    case "lightYellow":
      return (
        <Link to={to} className={cn(styles.link, styles.lightYellow)}>
          {children}
        </Link>
      );
    case "gradientHome":
      return (
        <Link to={to} className={cn(styles.link, styles.gradientHome)}>
          {children}
        </Link>
      );
    case "white":
      return (
        <Link to={to} className={cn(styles.link, styles.white)}>
          {children}
        </Link>
      );
    case "yellowBtn":
      return (
        <Link to={to} className={cn(styles.link, styles.yellowBtn)}>
          {children}
        </Link>
      );
    case "newsList":
      return (
        <Link to={to} className={cn(styles.link, styles.newsList)}>
          {children}
        </Link>
      );
    case "newsSeeAll":
      return (
        <Link to={to} className={cn(styles.link, styles.newsSeeAll)}>
          {children}
        </Link>
      );
    case "whiteToMap":
      return (
        <Link to={to} className={cn(styles.link, styles.whiteToMap)}>
          {children}
        </Link>
      );
    default:
      return <></>;
  }
};

export default LinkTag;
