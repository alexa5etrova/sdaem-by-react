import styles from "./SearchContainer.module.scss";

const SearchContainer = ({ children }) => {
  return <div className={styles.searchContainer}>{children}</div>;
};

export default SearchContainer;
