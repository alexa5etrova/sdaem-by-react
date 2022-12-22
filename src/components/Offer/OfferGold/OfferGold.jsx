import ChevronIcon from "assets/icons/ChevronIcon";

import LinkTag from "components/LinkTag/LinkTag";
import { OFFERS } from "data/home";

import styles from "./OfferGold.module.scss";


const OfferGold = () => {
  let offer = OFFERS.offerGold;
  return (
    <div className={styles.offer}>
      <h3>{offer.title}</h3>
      {offer.text.map((item, index) => (
        <p key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></p>
      ))}
      <LinkTag to={offer.linkTo} linkStyle="gradientHome">
        {offer.linkText} <ChevronIcon width="9" height="11" className={styles.arrow} />
      </LinkTag>
    </div>
  );
};

export default OfferGold;
