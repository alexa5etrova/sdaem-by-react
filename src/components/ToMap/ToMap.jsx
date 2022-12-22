import LocationIcon from "assets/icons/LocationIcon";
import cn from "classnames";

import Background from "../Background/Background";
import Htag from "../Htag/Htag";
import LinkTag from "../LinkTag/LinkTag";

import styles from "./ToMap.module.scss";


const ToMap = ({ header, page, body }) => {
  return (
    <div className={cn({ [styles.homeBg]: page === "home", [styles.flatsBg]: page === "flats" })}>
      <Background>
        <div className={styles.textToMapWrapper}>
          <Htag tag="h2white">{header}</Htag>
          <p className={styles.textMap}>{body}</p>
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
