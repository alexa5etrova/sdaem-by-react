import styles from "./PhotoLink.module.scss";
import FlatsLinksHome from "./Links/FlatsLinksHome";
import CottagesLinksHome from "./Links/CottagesLinksHome";
import SaunasLinksHome from "./Links/SaunasLinksHome";
import AutoLinksHome from "./Links/AutoLinksHome";

const PhotoLink = () => {
  return (
    <div className={styles.linksContainer}>
      <FlatsLinksHome />
      <CottagesLinksHome />
      <SaunasLinksHome />
      <AutoLinksHome />
    </div>
  );
};

export default PhotoLink;
