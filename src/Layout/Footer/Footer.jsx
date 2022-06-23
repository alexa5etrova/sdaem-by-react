import { AddressData, Navdata } from "../../data/Navdata";
import PaymentsLogo from "../../components/PaymentsLogo/PaymentsLogo";
import SocialMediaLogo from "../../components/SocialMediaLogo/SocialMediaLogo";
import styles from "./Footer.module.scss";
import logo from "./../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { SiteMapData } from "../../data/Navdata";
import { FlatNavData } from "./../../data/Navdata";
import cn from "classnames";

const navList = Navdata.filter((item) => item.name !== "Квартиры");
const flats = Navdata.filter((item) => item.name === "Квартиры");
const siteMap = SiteMapData.filter((item) => item.name !== "Главная");

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAddress}>
          <img className={styles.footerLogo} src={logo} alt="Сдаем бай лого" />
          <p className={styles.footerTranslitLine}>Сдаём бай</p>
          {AddressData.map((line) => (
            <p className={styles.footerAddressLine} key={line.id}>
              {line.body}
            </p>
          ))}
        </div>
        <div className={styles.footerNav}>
          <ul className={styles.footerNavList}>
            {navList.map(function (item) {
              return (
                <li className={styles.footerNavListItem} key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
          <div>
            {flats.map(function (item) {
              return (
                <p className={styles.footerNavListItem} key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </p>
              );
            })}
            <ul className={cn(styles.footerGreyNavList, styles.navGrid)}>
              {FlatNavData.map(function (item) {
                return (
                  <li key={item.id} className={styles.footerGreyNav}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <ul className={styles.footerGreyNavList}>
            {siteMap.map(function (item) {
              return (
                <li className={styles.footerGreyNav} key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.footerIcons}>
          <div className={styles.socials}>
            <p>Мы в соцсетях</p>
            <SocialMediaLogo />
          </div>
          <div className={styles.payments}>
            <PaymentsLogo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
