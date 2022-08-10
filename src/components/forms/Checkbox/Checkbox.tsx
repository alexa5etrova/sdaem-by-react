import { Field } from "formik";
import cn from "classnames";

import { CheckboxProps } from "./Checkbox.props";
import styles from "./Checkbox.module.scss";

const Checkbox = ({ name, value, title, isChecked = false }: CheckboxProps): JSX.Element => {
  return (
    <div className={styles.checkboxWrapper}>
      <label className={cn(styles.label, { [styles.checked]: isChecked })}>
        <Field type="checkbox" name={name} className={styles.checkbox} value={value} />
        {title}
      </label>
    </div>
  );
};

export default Checkbox;
