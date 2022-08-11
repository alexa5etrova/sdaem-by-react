import Htag from "../../Htag/Htag";
import LinkTag from "../../LinkTag/LinkTag";
import { PhotoLinkProps } from "../PhotoLink.props";

import styles from "./AutoLinksHome.module.scss";

const AutoLinksHome = (props: PhotoLinkProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.mask}>
        <div className={styles.wrapper}>
          <Htag tag="homeViolet">Если срочно нужна машина</Htag>
          <Htag tag="h2white" className={styles.text}>
            Авто на прокат
          </Htag>
          <div className={styles.link}>
            <LinkTag to="/cars" linkStyle="roundArrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoLinksHome;
