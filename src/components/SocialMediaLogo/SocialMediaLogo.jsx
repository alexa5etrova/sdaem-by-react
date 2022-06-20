import styles from "./SocialMediaLogo.module.scss";
import { ReactComponent as InstaIcon } from "../../assets/icons/instagram.svg";
import { ReactComponent as VkIcon } from "../../assets/icons/vk.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/facebook.svg";

const SocialMediaLogo = () => {
  return (
    <div>
      <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaListItem}>
          <a href="#" target="_blank">
            <InstaIcon />
          </a>
        </li>
        <li className={styles.socialMediaListItem}>
          <a href="#" target="_blank">
            <VkIcon />
          </a>
        </li>
        <li className={styles.socialMediaListItem}>
          <a href="#" target="_blank">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default SocialMediaLogo;
