import { Link } from "react-router-dom";
import cn from "classnames";
import PaymentsLogo from "../../components/PaymentsLogo/PaymentsLogo";
import SocialMediaLogo from "../../components/SocialMediaLogo/SocialMediaLogo";
import { CATEGORIES, COMPANY, FLAT_CATEGORIES, SITEMAP } from "../../const/const";
import logo from "./../../assets/images/logo.png";
import styles from "./Footer.module.scss";



const Footer = () => {
  const navList = CATEGORIES.filter((item) => item.name !== "Квартиры");
  const flats = CATEGORIES.filter((item) => item.name === "Квартиры");
  const siteMap = SITEMAP.filter((item) => item.name !== "Главная");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerAddress}>
          <img className={styles.footerLogo} src={logo} alt="Сдаем бай лого" />
          <p className={styles.footerTranslitLine}>Сдаём бай</p>
          {Object.entries(COMPANY).map(([key, value]) => (
             <p className={styles.footerAddressLine} key={key}>
             {value}
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
              {FLAT_CATEGORIES.map(function (item) {
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
