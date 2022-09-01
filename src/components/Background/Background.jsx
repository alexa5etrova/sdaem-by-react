import styles from "./Background.module.scss";
import cn from "classnames";
import PropTypes from "prop-types";

const Background = ({ children, bgStyle }) => {
  return (
    <div className={cn(styles.background, { [styles.homeFilter]: bgStyle === "homeFilter" })}>
      {children}
    </div>
  );
};

export default Background;

Background.propTypes = {
  children: PropTypes.node,
  bgStyle: PropTypes.string,
};
