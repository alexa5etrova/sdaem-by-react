import styles from "./FlatCard.module.scss";
import { FLAT_PREVIEW_LENGTH } from "./../../data/flats";
import LinkTag from "./../LinkTag/LinkTag";

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
    contacts,
  } = flat;
  let cutText = description.substr(0, FLAT_PREVIEW_LENGTH) + "...";

  return (
    <div className={styles.card}>
      <div className={styles.flatImg}>
        <img src={photoes[0].src} alt={photoes[0].alt} />
      </div>
      <LinkTag linkStyle="lightYellow" to={"/flats/" + id}>
        Подробнее
      </LinkTag>
    </div>
  );
};
export default FlatCard;
