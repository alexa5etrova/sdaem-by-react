import { useState } from "react";
import cn from "classnames";
import { FLAT_PREVIEW_LENGTH } from "./../../data/flats";
import LinkTag from "./../LinkTag/LinkTag";
import Tag from "../Tag/Tag";
import Button from "./../Button/Button";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/location.svg";
import { ReactComponent as MetroIcon } from "../../assets/icons/metro.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";

import styles from "./FlatCard.module.scss";

import OwnerContacts from "../OwnerContacts/OwnerContacts";

const FlatCard = ({ flat, view }) => {
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
    sqM,
    status,
    contacts,
  } = flat;
  let cutDesc = description.substr(0, FLAT_PREVIEW_LENGTH) + "...";

  const openContacts = () => {
    setShowContacts((prev) => !prev);
  };
  if (view === "tile") {
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
              {places.value + " " + places.name}
            </Tag>
            <Tag tagType="info">{rooms} комн</Tag>
            <Tag tagType="info">
              {sqM} м<sup>2</sup>
            </Tag>
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
  }
  if (view === "list") {
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
  }
};
export default FlatCard;
