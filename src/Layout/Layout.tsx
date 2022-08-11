import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { LayoutProps } from "./Layout.props";
import styles from "./Layout.module.scss";

const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
