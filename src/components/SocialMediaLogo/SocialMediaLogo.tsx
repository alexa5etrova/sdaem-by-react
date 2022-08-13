import { SocialMediaLogoProps } from "./SocialMediaLogo.props";
import { COMPANY } from "../../data/contacts";
import InstagramIcon from "../../assets/icons/InstagramIcon";
import VkIcon from "../../assets/icons/VkIcon";
import FacebookIcon from "../../assets/icons/FacebookIcon";
import styles from "./SocialMediaLogo.module.scss";

const SocialMediaLogo = (props: SocialMediaLogoProps): JSX.Element => {
  return (
    <div>
      <ul className={styles.socialMediaList}>
        <li className={styles.socialMediaListItem}>
          <a href={COMPANY.instagram} target="_blank" rel="noreferrer">
            <InstagramIcon />
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
