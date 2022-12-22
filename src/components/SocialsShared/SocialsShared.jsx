import FacebookSharedIcon from "assets/icons/FacebookSharedIcon";
import TelegramIcon from "assets/icons/TelegramIcon";
import ViberIcon from "assets/icons/ViberIcon";
import VkIcon from "assets/icons/VkIcon";
import WhatsappIcon from "assets/icons/WhatsappIcon";
import cn from "classnames";

import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";


import styles from "./SocialsShared.module.scss";


const SocialsShared = ({ title, photo, sharedLink, page }) => {
  return (
    <div className={cn(styles.socialTags, { [styles.socialTagsFlats]: page === "flats" })}>
      <p className={styles.shareText}>Поделиться:</p>
      <VKShareButton url={sharedLink} title={title} image={photo}>
        <div className={cn(styles.iconHolder, { [styles.iconHolderFlats]: page === "flats" })}>
          <VkIcon className={styles.icon} width="20" height="20" />
        </div>
      </VKShareButton>
      <FacebookShareButton url={sharedLink} quote={title}>
        <div className={cn(styles.iconHolder, { [styles.iconHolderFlats]: page === "flats" })}>
          <FacebookSharedIcon className={styles.icon} />
        </div>
      </FacebookShareButton>
      <ViberShareButton url={sharedLink} title={title}>
        <div className={cn(styles.iconHolder, { [styles.iconHolderFlats]: page === "flats" })}>
          <ViberIcon className={styles.icon} width="22" height="22" />
        </div>
      </ViberShareButton>
      <TelegramShareButton url={sharedLink} title={title}>
        <div className={cn(styles.iconHolder, { [styles.iconHolderFlats]: page === "flats" })}>
          <TelegramIcon className={styles.icon} width="18" height="18" />
        </div>
      </TelegramShareButton>
      <WhatsappShareButton url={sharedLink} title={title}>
        <div className={cn(styles.iconHolder, { [styles.iconHolderFlats]: page === "flats" })}>
          <WhatsappIcon className={styles.icon} width="20" height="20" />
        </div>
      </WhatsappShareButton>
    </div>
  );
};
export default SocialsShared;
