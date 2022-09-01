import Nav from "./Nav/Nav";
import SiteMapPanel from "./SiteMapPanel/SiteMapPanel";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <SiteMapPanel />
      <Nav />
    </header>
  );
};
export default Header;
