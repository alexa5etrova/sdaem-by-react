import { PAYMENTS_METHOD } from "./../../data/contacts";

import styles from "./PaymentsLogo.module.scss";

const PaymentsLogo = () => {
  return (
    <div>
      <ul className={styles.paymentsList}>
        {PAYMENTS_METHOD.map((pay) => (
          <li className={styles.paymentsListItem} key={pay.id}>
            <img src={pay.src} alt={pay.src} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default PaymentsLogo;
