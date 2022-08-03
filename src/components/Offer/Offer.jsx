import LinkTag from "./../LinkTag/LinkTag";
import ToMap from "../ToMap/ToMap";
import OfferRegular from "./OfferRegular/OfferRegular";
import { ReactComponent as ArrowIcon } from "./../../assets/icons/chevron.svg";
import dots from "./../../assets/images/dotsWhite.png";
import photo1 from "./../../assets/images/offer1.png";
import photo2 from "./../../assets/images/offer2.png";
import { OFFERS } from "./../../data/home";

import styles from "./Offer.module.scss";
import OfferGold from "./OfferGold/OfferGold";

const Offer = () => {
  let offer1 = OFFERS.offersRegular[0];
  let offer2 = OFFERS.offersRegular[1];

  return (
    <div className={styles.offerWrapper}>
      <div className={styles.dots}>
        <img src={dots} alt="Декорация точки" />
      </div>
      <ToMap header="Поиск квартир на карте" />
      <div className={styles.offers}>
        <OfferRegular photo={photo1} title={offer1.title} text={offer1.text}>
          <LinkTag to={offer1.linkTo} linkStyle="yellowBtn">
            {offer1.linkText}
          </LinkTag>
        </OfferRegular>
        <OfferRegular photo={photo2} title={offer2.title} text={offer2.text}>
          <LinkTag to={offer2.linkTo} linkStyle="yellowBtn">
            {offer2.linkText} <ArrowIcon width="10" height="13" className={styles.arrow} />
            <span className={styles.arrowGap}></span>
          </LinkTag>
        </OfferRegular>
        <OfferGold />
      </div>
    </div>
  );
};

export default Offer;
