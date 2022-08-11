import styles from "./Loader.module.scss";
import { LoaderProps } from "./Loader.props";

const Loader = (props: LoaderProps): JSX.Element => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.ldsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
