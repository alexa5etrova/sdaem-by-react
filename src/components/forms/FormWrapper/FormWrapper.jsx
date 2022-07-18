import cn from "classnames";
import styles from "./FormWrapper.module.scss";

const FormWrapper = (props) => {
  return (
    <div
      className={cn(styles.formWrapper, {
        [styles.wrAuth]: props.wrStyle === "auth",
      })}
    >
      {props.children}
    </div>
  );
};

export default FormWrapper;
