import { useState } from "react";
import cn from "classnames";

import { FLAT_PREVIEW_LIST_LENGTH } from "data/flats";
import LinkTag from "components/LinkTag/LinkTag";
import Tag from "components/Tag/Tag";
import Htag from "components/Htag/Htag";
import Button from "components/Button/Button";
import OwnerContacts from "components/OwnerContacts/OwnerContacts";
import CardSlider from "components/FlatCard/CardSlider/CardSlider";
import { ReactComponent as UserIcon } from "assets/icons/user.svg";
import { ReactComponent as LocationIcon } from "assets/icons/location.svg";
import { ReactComponent as MetroIcon } from "assets/icons/metro.svg";
import { ReactComponent as PhoneIcon } from "assets/icons/phone.svg";
import { ReactComponent as HeartIcon } from "./../heart.svg";

import styles from "./ListCard.module.scss";

const ListCard = ({ flat }) => {
  const [showContacts, setShowContacts] = useState(false);
  const {
    id,
    description,
    price,
    address,
    district,
    metro,
    title,
    photoes,
    places,
    period,
    rooms,
    status,
    contacts,
  } = flat;
  let cutDesc = description.substr(0, FLAT_PREVIEW_LIST_LENGTH) + "...";

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
        <div className={styles.headerRow}>
          <div className={styles.headerContainer}>
            <Htag tag="h2FlatHeader">{title}</Htag>
            <div className={styles.addressWrapper}>
              <LocationIcon className={styles.locationIcon} width="16" height="20" />
              <p className={cn(styles.addressText, styles.street)}>{address}</p>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.price}>{price.toFixed(2)} BYN</p>
            <p className={styles.period}>{period === "day" ? "за сутки" : "в месяц"}</p>
          </div>
        </div>

        <div className={styles.tagsRow}>
          <Tag tagType="info">
            <UserIcon width="20" height="20" className={styles.icon} />
            {places.value + " " + places.name}
          </Tag>
          <Tag tagType="info">{rooms} комн</Tag>
          <Tag tagType="info">
            <MetroIcon className={styles.locationIcon} width="20" height="13" />
            {metro}
          </Tag>
          <Tag tagType="info">
            <span className={styles.locationIcon}>район:</span>
            {district}
          </Tag>
        </div>

        <p className={styles.description}>{cutDesc}</p>
        <div className={styles.buttons}>
          <div className={styles.morebtns}>
            <Button btnStyle="white" onClick={openContacts}>
              <PhoneIcon className={styles.phoneIcon} width="9" height="15" />
              Контакты
            </Button>
            <Button btnStyle="rose" onClick={openContacts}>
              В закладки
              <HeartIcon className={styles.heartIcon} width="15" height="14" />
            </Button>
          </div>

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

export default ListCard;
