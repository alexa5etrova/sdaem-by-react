import LinkTag from "../../LinkTag/LinkTag";
import { ReactComponent as ArrowIcon } from "./../../../assets/icons/chevron.svg";
import styles from "./OfferGold.module.scss";
import { OFFERS } from "./../../../data/home";

const OfferGold = () => {
  let offer = OFFERS.offerGold;
  return (
    <div className={styles.offer}>
      <h3>{offer.title}</h3>
      {offer.text.map((item, index) => (
        <p key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></p>
      ))}
      <LinkTag to={offer.linkTo} linkStyle="gradientHome">
        {offer.linkText} <ArrowIcon width="9" height="11" className={styles.arrow} />
      </LinkTag>
    </div>
  );
};

export default OfferGold;
