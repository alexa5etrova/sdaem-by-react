import styles from "./Htag.module.scss";

const Htag = (props) => {
  switch (props.tag) {
    case "h1":
      return <h1 className={styles.h1}>{props.children}</h1>;
    case "h1white":
      return <h1 className={styles.h1white}>{props.children}</h1>;
    case "h2":
      return <h2 className={styles.h2}>{props.children}</h2>;
    case "h3":
      return <h3 className={styles.h3}>{props.children}</h3>;
    case "notFound":
      return <h1 className={styles.notFound}>{props.children}</h1>;
    default:
      return <></>;
  }
};

export default Htag;
