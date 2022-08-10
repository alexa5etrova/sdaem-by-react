import cn from "classnames";
import { SearchContainerProps } from "./SearchContainer.props";
import styles from "./SearchContainer.module.scss";

const SearchContainer = ({ children, stl }: SearchContainerProps): JSX.Element => {
  return (
    <div
      className={cn(styles.container, {
        [styles.search]: stl === "search",
        [styles.carousel]: stl === "carousel",
      })}
    >
      {children}
    </div>
  );
};

export default SearchContainer;
