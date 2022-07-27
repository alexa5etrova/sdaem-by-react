import cn from "classnames";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronIcon } from "../../assets/icons/chevron.svg";
import styles from "./LinkTag.module.scss";

const LinkTag = ({ children, linkStyle, to, ...props }) => {
  switch (linkStyle) {
    case "violet":
      return (
        <Link to={to} {...props} className={cn(styles.link, styles.violet)}>
          {children}
        </Link>
      );
    case "roundArrow":
      return (
        <Link to={to} className={styles.round} {...props}>
          <ChevronIcon width="10" height="16" className={styles.icon} />
        </Link>
      );
    default:
      return <></>;
  }
};

export default LinkTag;
