import cn from "classnames";

import { COMPANY } from "./../../../data/contacts";
import { ReactComponent as LocationIcon } from "./../../../assets/icons/location.svg";
import { ReactComponent as PhoneIcon } from "./../../../assets/icons/phone.svg";
import { ReactComponent as EmailIcon } from "./../../../assets/icons/envelope.svg";
import { ReactComponent as ClockIcon } from "./../../../assets/icons/clock.svg";
import { ReactComponent as TelegramIcon } from "./../../../assets/icons/telegram.svg";
import { ReactComponent as ViberIcon } from "./../../../assets/icons/viber.svg";
import { ReactComponent as WhatsappIcon } from "./../../../assets/icons/whatsapp.svg";

import styles from "./ContactDetails.module.scss";

const ContactDetails = (props) => {
  let phone = "tel:" + COMPANY.phone;
  let email = "mailto:" + COMPANY.email;

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
            <a
              href={COMPANY.viber}
              className={styles.socialIcon}
              target="_blank"
              rel="noreferrer noopener"
            >
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
              href={COMPANY.whatsapp}
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
          <EmailIcon />
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
