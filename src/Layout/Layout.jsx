import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from ".//Header/Header";
import { useSelector } from "react-redux";

const Layout = () => {
  const { status, error } = useSelector((state) => state.nav);

  return (
    <div className={styles.wrapper}>
      {status === "resolved" && <Header />}
      <main className={styles.main}>
        <Outlet />
      </main>

      {status === "resolved" && <Footer />}
    </div>
  );
};

export default Layout;
