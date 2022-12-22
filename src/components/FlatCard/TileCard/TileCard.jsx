import { useState } from "react";
import HeartIcon from "assets/icons/Heart";

import LocationIcon from "assets/icons/LocationIcon";
import MetroIcon from "assets/icons/MetroIcon";
import PhoneIcon from "assets/icons/PhoneIcon";
import UserIcon from "assets/icons/UserIcon";
import cn from "classnames";
import Button from "components/Button/Button";

import CardSlider from "components/FlatCard/CardSlider/CardSlider";
import LinkTag from "components/LinkTag/LinkTag";
import OwnerContacts from "components/OwnerContacts/OwnerContacts";
import Tag from "components/Tag/Tag";

import { FLAT_PREVIEW_LENGTH } from "data/flats";

import styles from "./TileCard.module.scss";


const TileCard = ({ flat }) => {
  const [showContacts, setShowContacts] = useState(false);
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
    status,
    contacts,
  } = flat;
  let cutDesc = description.substr(0, FLAT_PREVIEW_LENGTH) + "...";

  const openContacts = () => {
    setShowContacts((prev) => !prev);
  };

  return (
    <div className={styles.card}>
      <Tag tagType={status} />
      <div className={styles.flatImg}>
        {photoes.length === 1 ? (
          <img src={photoes[0].src} alt={photoes[0].alt} />
        ) : (
          <CardSlider photoes={photoes} />
        )}
      </div>
      <div className={styles.flatContainer}>
        <div className={styles.infoRow}>
          <div className={styles.priceContainer}>
            <p className={styles.price}>{price.toFixed(2)} BYN</p>
            <p className={styles.period}>{period === "day" ? "за сутки" : "в месяц"}</p>
          </div>
          <Tag tagType="infoTile">
            <UserIcon width="15" height="15" className={styles.icon} />
            {places.value + " " + places.name}
          </Tag>
          <Tag tagType="infoTile">{rooms} комн</Tag>
        </div>
        <div className={styles.address}>
          <div className={styles.addressWrapper}>
            <LocationIcon className={styles.locationIcon} width="12" height="15" />
            <p className={cn(styles.addressText, styles.street)}>{address}</p>
          </div>
          <div className={styles.districts}>
            <div className={styles.addressWrapper}>
              <MetroIcon className={styles.locationIcon} width="20" height="13" />
              <p className={cn(styles.addressText, styles.metro)}>{metro}</p>
            </div>
            <div className={styles.addressWrapper}>
              <span className={styles.marker}></span>
              <p className={cn(styles.addressText, styles.district)}>{district}</p>
            </div>
          </div>
        </div>
        <p className={styles.description}>{cutDesc}</p>
        <div className={styles.buttons}>
          <Button btnStyle="roseRound">
            <HeartIcon className={styles.heartIcon} width="15" height="14" />
          </Button>
          <Button btnStyle="white" onClick={openContacts}>
            <PhoneIcon className={styles.phoneIcon} width="9" height="15" />
            Контакты
          </Button>
          <LinkTag linkStyle="lightYellow" to={"/flats/" + id}>
            Подробнее
          </LinkTag>
          {showContacts && (
            <OwnerContacts
              photo={contacts.photo}
              email={contacts.email}
              phone={contacts.phone}
              name={contacts.name}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TileCard;
