import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  VKIcon,
  FacebookIcon,
  ViberIcon,
  TelegramIcon,
  WhatsappIcon,
} from "react-share";

import styles from "./SocialsShared.module.scss";

const SocialsShared = ({ title, photo, sharedLink }) => {
  return (
    <div className={styles.socialTags}>
      <p className={styles.shareText}>Поделиться:</p>
      <VKShareButton url={sharedLink} title={title} image={photo}>
        <VKIcon
          size={34}
          round={true}
          bgStyle={{ fill: "rgba(102, 78, 249, 0.1)" }}
          iconFillColor="#664EF9"
        />
      </VKShareButton>
      <FacebookShareButton url={sharedLink} quote={title}>
        <FacebookIcon
          size={34}
          round={true}
          bgStyle={{ fill: "rgba(102, 78, 249, 0.1)" }}
          iconFillColor="#664EF9"
        />
      </FacebookShareButton>
      <ViberShareButton url={sharedLink} title={title}>
        <ViberIcon
          size={34}
          round={true}
          bgStyle={{ fill: "rgba(102, 78, 249, 0.1)" }}
          iconFillColor="#664EF9"
        />
      </ViberShareButton>
      <TelegramShareButton url={sharedLink} title={title}>
        <TelegramIcon
          size={34}
          round={true}
          bgStyle={{ fill: "rgba(102, 78, 249, 0.1)" }}
          iconFillColor="#664EF9"
        />
      </TelegramShareButton>
      <WhatsappShareButton url={sharedLink} title={title}>
        <WhatsappIcon
          size={34}
          round={true}
          bgStyle={{ fill: "rgba(102, 78, 249, 0.1)" }}
          iconFillColor="#664EF9"
        />
      </WhatsappShareButton>
    </div>
  );
};
export default SocialsShared;
