import { FLAT_PREVIEW_LENGTH } from "./../../data/flats";
import LinkTag from "./../LinkTag/LinkTag";
import Tag from "../Tag/Tag";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import styles from "./FlatCard.module.scss";

const FlatCard = ({ flat }) => {
  const {
    id,
    description,
    price,
    address,
    district,
    metro,
    photoes,
    places,
    period,
    rooms,
    sqM,
    status,
    contacts,
  } = flat;
  let cutText = description.substr(0, FLAT_PREVIEW_LENGTH) + "...";

  return (
    <div className={styles.card}>
      <Tag tagType={status} />
      <div className={styles.flatImg}>
        <img src={photoes[0].src} alt={photoes[0].alt} />
      </div>
      <div className={styles.flatContainer}>
        <div className={styles.infoRow}>
          <div className={styles.priceContainer}>
            <p className={styles.price}>{price.toFixed(2)} BYN</p>

            <p className={styles.period}>{period === "day" ? "за сутки" : "в месяц"}</p>
          </div>
          <Tag tagType="info">
            <UserIcon width="15" height="15" className={styles.icon} />
            {places}
          </Tag>
          <Tag tagType="info">{rooms}</Tag>
          <Tag tagType="info">
            {sqM} м<sup>2</sup>
          </Tag>
        </div>

        <LinkTag linkStyle="lightYellow" to={"/flats/" + id}>
          Подробнее
        </LinkTag>
      </div>
    </div>
  );
};
export default FlatCard;
