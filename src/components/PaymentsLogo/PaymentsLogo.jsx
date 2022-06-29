import belkart from "./../../assets/images/belkart.png";
import mastercard from "./../../assets/images/mastercard.png";
import securecode from "./../../assets/images/securecode.png";
import verifiedByVisa from "./../../assets/images/verifiedByVisa.png";
import visa from "./../../assets/images/visa.png";
import webpay from "./../../assets/images/webpay.png";
import styles from "./PaymentsLogo.module.scss";

const PaymentsLogo = () => {
  return (
    <div>
      <ul className={styles.paymentsList}>
        <li className={styles.paymentsListItem}>
          <img src={visa} alt="visa logo" />
        </li>
        <li className={styles.paymentsListItem}>
          <img src={webpay} alt="webpay logo" />
        </li>
        <li className={styles.paymentsListItem}>
          <img src={verifiedByVisa} alt="verified By Visa logo" />
        </li>
        <li className={styles.paymentsListItem}>
          <img src={mastercard} alt="mastercard" />
        </li>
        <li className={styles.paymentsListItem}>
          <img src={securecode} alt="securecode" />
        </li>
        <li className={styles.paymentsListItem}>
          <img src={belkart} alt="belcard" />
        </li>
      </ul>
    </div>
  );
};
export default PaymentsLogo;
