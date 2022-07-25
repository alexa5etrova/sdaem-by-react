import Background from "./../../components/Background/Background";

import styles from "./Home.module.scss";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Background bgStyle="homeFilter">
        <div className={styles.violetWrapper}></div>
      </Background>
    </div>
  );
};

export default Home;
