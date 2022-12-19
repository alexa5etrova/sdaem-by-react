import { ReactComponent as InstaIcon } from "assets/icons/instagram.svg";
import { ReactComponent as VkIcon } from "assets/icons/vk.svg";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";

import { COMPANY } from "data/contacts";

import styles from "./SocialMediaLogo.module.scss";

const SocialMediaLogo = () => {
  return (
    <div>
      <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaListItem}>
          <a href={COMPANY.instagram} target="_blank" rel="noreferrer">
            <InstaIcon />
          </a>
        </li>
        <li className={styles.socialMediaListItem}>
          <a href={COMPANY.vk} target="_blank" rel="noreferrer">
            <VkIcon />
          </a>
        </li>
        <li className={styles.socialMediaListItem}>
          <a href={COMPANY.facebook} target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaLogo;
