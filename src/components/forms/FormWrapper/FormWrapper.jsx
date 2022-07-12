import styles from "./FormWrapper.module.scss";

const FormWrapper = (props) => {
  return <div className={styles.formWrapper}>{props.children}</div>;
};

export default FormWrapper;
