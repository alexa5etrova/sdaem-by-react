import cn from "classnames";
import { OwnerContactsProps } from "./OwnerContacts.props";
import ViberIcon from "../../assets/icons/viber.svg";
import WhatsAppIcon from "../../assets/icons/whatsapp.svg";
import EmailIcon from "../../assets/icons/envelope.svg";
import styles from "./OwnerContacts.module.scss";

const OwnerContacts = ({ photo, name, phone, email }: OwnerContactsProps): JSX.Element => {
  let viber = "viber://chat?number=%2B" + phone.replace(/[^0-9]/g, "");
  let whatsapp = "https://wa.me/" + phone.replace(/[^0-9]/g, "");

  return (
    <div className={styles.owner}>
      <div className={styles.photo}>
        <img src={photo} alt="Фото владельца квартиры" />
      </div>
      <p className={styles.greyText}>Владелец</p>
      <p className={styles.name}>{name}</p>
      <a className={styles.phone} href={`telto:${phone}`}>
        {phone}
      </a>
      <a
        className={styles.email}
        href={`emailto:${email}`}
        target="_blank"
        rel="noreferrer noopener"
      >
        {email}
      </a>
      <div className={styles.iconWrapper}>
        <a
          href={viber}
          className={cn(styles.icon, styles.viber)}
          target="_blank"
          rel="noreferrer noopener"
        >
          <ViberIcon width="15" height="16" />
        </a>
        <a
          href={whatsapp}
          className={cn(styles.icon, styles.wa)}
          target="_blank"
          rel="noreferrer noopener"
        >
          <WhatsAppIcon width="15" height="16" />
        </a>
        <a
          href={`emailto:${email}`}
          className={cn(styles.icon, styles.emailIcon)}
          target="_blank"
          rel="noreferrer noopener"
        >
          <EmailIcon width="18" height="14" />
        </a>
      </div>
    </div>
  );
};

export default OwnerContacts;
