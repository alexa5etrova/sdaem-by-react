import styles from "./Nav.module.scss";
import logo from "./../../../assets/images/logo.png";
import Button from "../../Button/Button";
const CatalogueNavData = [
  { name: "Квартиры на сутки", id: 111, href: "#" },
  { name: "Коттеджи и усадьбы", id: 112, href: "#" },
  { name: "Бани и сауны", id: 113, href: "#" },
  {
    name: "Авто напрокат",
    id: 114,
    href: "#",
  },
];

const Nav = (props) => {
  return (
    <nav className={styles.headerNav}>
      <div className={styles.headerNavContainer}>
        <img src={logo} alt="logo" />
        <ul className={styles.headerNavList}>
          {CatalogueNavData.map((item) => (
            <li key={item.id} className={styles.headerNavListItem}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
        <Button btnStyle="gradient">+ Разместить объявление</Button>
      </div>
    </nav>
  );
};

export default Nav;
