import LinkTag from "../../LinkTag/LinkTag";
import ChevronIcon from "./../../../assets/icons/ChevronIcon";

import { OFFERS } from "../../../data/home";
import { OfferGoldProps } from "./OfferGold.props";

import styles from "./OfferGold.module.scss";

const OfferGold = (props: OfferGoldProps): JSX.Element => {
  let offer = OFFERS.offerGold;
  return (
    <div className={styles.offer}>
      <h3>{offer.title}</h3>
      {offer.text.map((item, index) => (
        <p key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: item }}></p>
      ))}
      <LinkTag to={offer.linkTo} linkStyle="gradientHome">
        {offer.linkText} <ChevronIcon width="20" height="20" className={styles.arrow} />
      </LinkTag>
    </div>
  );
};

export default OfferGold;
