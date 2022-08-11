import Htag from "../../Htag/Htag";
import LinkTag from "../../LinkTag/LinkTag";
import { PhotoLinkProps } from "../PhotoLink.props";

import styles from "./CottagesLinksHome.module.scss";

const CottagesLinksHome = (props: PhotoLinkProps): JSX.Element => {
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
