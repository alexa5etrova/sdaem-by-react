import Nav from "./Nav/Nav";
import SiteMapPanel from "./SiteMapPanel/SiteMapPanel";

const Header = (props) => {
  return (
    <header>
      <SiteMapPanel />
      <Nav />
    </header>
  );
};
export default Header;
