import cn from "classnames";
import { FormWrapperProps } from "./FormWrapper.props";
import styles from "./FormWrapper.module.scss";

const FormWrapper = ({ wrStyle, children }: FormWrapperProps): JSX.Element => {
  return (
    <div
      className={cn(styles.formWrapper, {
        [styles.wrAuth]: wrStyle === "auth",
        [styles.wrSignup]: wrStyle === "signup",
      })}
    >
      {children}
    </div>
  );
};

export default FormWrapper;
