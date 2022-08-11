import Nav from "./Nav/Nav";
import SiteMapPanel from "./SiteMapPanel/SiteMapPanel";
import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.props";

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <SiteMapPanel />
      <Nav />
    </header>
  );
};
export default Header;
