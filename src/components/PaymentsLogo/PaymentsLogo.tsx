import visa from "./../../assets/images/visa.png";
import webpay from "./../../assets/images/webpay.png";
import vByVisa from "./../../assets/images/verifiedByVisa.png";
import MasterCard from "./../../assets/images/mastercard.png";
import securecode from "./../../assets/images/securecode.png";
import belcart from "./../../assets/images/belkart.png";
import { PaymentsLogoProps } from "./PaymentsLogo.props";
import styles from "./PaymentsLogo.module.scss";

interface PaymentsMethodModel {
  src: string;
  name: string;
  id: number;
}
const PaymentsLogo = (props: PaymentsLogoProps): JSX.Element => {
  const PAYMENTS_METHOD: PaymentsMethodModel[] = [
    { src: visa, name: "Visa", id: 1 },
    { src: webpay, name: "Webpay", id: 2 },
    { src: vByVisa, name: "Verified By Visa", id: 3 },
    { src: MasterCard, name: "Master Card", id: 4 },
    { src: securecode, name: "Secure code", id: 5 },
    { src: belcart, name: "Belkart", id: 6 },
  ];

  return (
    <div>
      <ul className={styles.paymentsList}>
        {PAYMENTS_METHOD.map((pay) => (
          <li className={styles.paymentsListItem} key={pay.id}>
            <img src={pay.src} alt={pay.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PaymentsLogo;
