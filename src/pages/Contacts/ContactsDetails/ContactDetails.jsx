import ClockIcon from "assets/icons/ClockIcon";
import EnvelopeIcon from "assets/icons/EnvelopeIcon";

import LocationIcon from "assets/icons/LocationIcon";
import PhoneIcon from "assets/icons/PhoneIcon";
import TelegramIcon from "assets/icons/TelegramIcon";
import ViberIcon from "assets/icons/ViberIcon";
import WhatsappIcon from "assets/icons/WhatsappIcon";
import cn from "classnames";
import { COMPANY } from "data/contacts";

import styles from "./ContactDetails.module.scss";


const ContactDetails = (props) => {
  let phone = "tel:" + COMPANY.phone;
  let email = "mailto:" + COMPANY.email;
  let viber = "viber://chat?number=%2B" + COMPANY.phone.replace(/[^0-9]/g, "");
  let whatsapp = "https://wa.me/" + COMPANY.phone.replace(/[^0-9]/g, "");

  return (
    <div className={styles.contactDetails}>
      <div className={styles.contactRow}>
        <div className={styles.contactIcon}>
          <LocationIcon />
        </div>
        <div className={styles.contactInfo}>{COMPANY.address}</div>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactIcon}>
          <PhoneIcon />
        </div>
        <div className={cn(styles.contactInfo, styles.phones)}>
          <a href={phone}>{COMPANY.phone}</a>
          <div className={styles.socialContainer}>
            <a href={viber} className={styles.socialIcon} target="_blank" rel="noreferrer noopener">
              <ViberIcon />
            </a>
            <a
              href={COMPANY.telegram}
              className={cn(styles.socialIcon, styles.telegram)}
              target="_blank"
              rel="noreferrer noopener"
            >
              <TelegramIcon />
            </a>
            <a
              href={whatsapp}
              className={styles.socialIcon}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactIcon}>
          <EnvelopeIcon />
        </div>
        <div className={styles.contactEmail}>
          <a href={email}>{COMPANY.email}</a>
        </div>
      </div>
      <div className={styles.contactRow}>
        <div className={styles.contactIcon}>
          <ClockIcon />
        </div>
        <div className={styles.contactInfo}>
          <span className={styles.openHours}>Режим работы: </span>
          {COMPANY.openHours}
        </div>
      </div>
    </div>
  );
};
export default ContactDetails;
