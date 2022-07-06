import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from ".//Header/Header";
import Loader from "../components/Loader/Loader";
import styles from "./Layout.module.scss";

const Layout = (props) => {
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
