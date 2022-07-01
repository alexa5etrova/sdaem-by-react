import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from ".//Header/Header";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";

const Layout = () => {
  const { status, error } = useSelector((state) => state.nav);

  return (
    <div className={styles.wrapper}>
      <Header />
      {status === "loading" && <Loader />}
      {status === "rejected" && error}
      {status === "resolved" && (
        <main className={styles.main}>
          <Outlet />
        </main>
      )}

      <Footer />
    </div>
  );
};

export default Layout;
