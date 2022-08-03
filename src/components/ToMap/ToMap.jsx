import Background from "../Background/Background";
import Htag from "../Htag/Htag";
import LinkTag from "../LinkTag/LinkTag";
import { ReactComponent as LocationIcon } from "./../../assets/icons/location.svg";

import styles from "./ToMap.module.scss";

const ToMap = ({ header }) => {
  return (
    <div className={styles.bg}>
      <Background>
        <div className={styles.textToMapWrapper}>
          <Htag tag="h2white">{header}</Htag>
          <p className={styles.textMap}>
            Ищите квартиры на сутки в центре города, возле парка или в живописном районе
          </p>
          <LinkTag linkStyle="white" to="/map">
            <LocationIcon width="14" height="16" className={styles.locationIcon} />
            Открыть карту
          </LinkTag>
        </div>
      </Background>
    </div>
  );
};

export default ToMap;
