import Htag from "components/Htag/Htag";

import styles from "./OfferRegular.module.scss";


const OfferRegular = ({ photo, title, text, children }) => {
  return (
    <div className={styles.offer}>
      <div className={styles.row}>
        <img src={photo} alt={title} />
        <Htag tag="h3violet">{title}</Htag>
      </div>
      <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }}></p>
      <div>{children}</div>
    </div>
  );
};

export default OfferRegular;
