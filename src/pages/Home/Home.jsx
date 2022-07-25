import Select from "../../components/Filter/Select/Select";
import Background from "./../../components/Background/Background";

import styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Background bgStyle="homeFilter">
        <div className={styles.violetWrapper}>
          <Select />
        </div>
      </Background>
    </div>
  );
};

export default Home;
