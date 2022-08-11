import Htag from "../../Htag/Htag";
import LinkTag from "../../LinkTag/LinkTag";
import { PhotoLinkProps } from "../PhotoLink.props";

import styles from "./SaunasLinksHome.module.scss";

const SaunasLinksHome = (props: PhotoLinkProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <Htag tag="homeViolet">Попариться в бане с друзьями</Htag>
          <Htag tag="h2white" className={styles.text}>
            Бани и сауны
          </Htag>
          <div className={styles.link}>
            <LinkTag to="/saunas" linkStyle="roundArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaunasLinksHome;
