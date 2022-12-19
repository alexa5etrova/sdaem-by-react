import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import cn from "classnames";
import { ReactComponent as VkIcon } from "assets/icons/vk.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebookShare.svg";
import { ReactComponent as ViberIcon } from "assets/icons/viber.svg";
import { ReactComponent as TelegramIcon } from "assets/icons/telegram.svg";
import { ReactComponent as WhatsappIcon } from "assets/icons/whatsapp.svg";

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
          <FacebookIcon className={styles.icon} />
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
