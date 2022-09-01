import Htag from "../../Htag/Htag";
import LinkTag from "../../LinkTag/LinkTag";

import styles from "./CottagesLinksHome.module.scss";

const CottagesLinksHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <Htag tag="homeViolet">Снять коттедж на праздник</Htag>
          <Htag tag="h2white" className={styles.text}>
            Коттеджи и усадьбы
          </Htag>
          <div className={styles.link}>
            <LinkTag to="/cottages" linkStyle="roundArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CottagesLinksHome;
