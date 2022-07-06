import Htag from "./../../components/Htag/Htag";
import Background from "../../components/Background/Background";
import styles from "./Contacts.module.scss";

const Contacts = (props) => {
  return (
    <div className={styles.contacts}>
      <Background>
        <div className={styles.contactsContainer}>
          <div className={styles.contactsText}>
            <Htag tag="h1white" lassName={styles.contactsHeader}>
              Контакты
            </Htag>
            <p className={styles.contactsParagragh}>
              Если у Вас есть пожелания, предложения или претензии по
              организации работы сайта мы всегда рады услышать Ваше мнение.
            </p>
          </div>
          <div className={styles.contactsForm}></div>
          <div className={styles.contactsSocial}></div>
        </div>
      </Background>
    </div>
  );
};
export default Contacts;
