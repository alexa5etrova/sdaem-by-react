import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../../Button/Button";
import Input from "./../Input/Input";
import FormWrapper from "../FormWrapper/FormWrapper";
import { ReactComponent as AttentionIcon } from "./../../../assets/icons/attention.svg";
import styles from "./Feedback.module.scss";

const Feedback = (props) => {
  const formik = useFormik({
    initialValues: { name: "", email: "", message: "" },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Имя должно содержать не более 15 символов")
        .required("Необходимо заполнить поле имени"),
      email: Yup.string()
        .email("Введите корректный email адрес")
        .required("Необходимо заполнить поле email"),
      message: Yup.string()
        .max(200, "Сообщение должно содержать не более 200 символов")
        .min(50, "Сообщение должно содержать не менее 50 символов")
        .required("Необходимо заполнить поле сообщения"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <FormWrapper>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.name}>
          <label for="name" className={styles.label}>
            Ваше имя
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            placeholder="Введите имя"
            onChange={formik.handleChange}
            inputStyle="formInput"
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.email}>
          <label for="email" className={styles.label}>
            Ваша электронная почта
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            placeholder="Введите email"
            onChange={formik.handleChange}
            inputStyle="formInput"
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.message}>
          <label for="message" className={styles.label}>
            Ваше сообщение
          </label>
          <textarea
            type="textarea"
            name="message"
            id="message"
            value={formik.values.message}
            placeholder="Введите сообщение"
            onChange={formik.handleChange}
            className={styles.textarea}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className={styles.errorWrapper}>
          {formik.touched.name && formik.errors.name ? (
            <p className={styles.error}>
              {formik.errors.name}
              <span>
                <AttentionIcon className={styles.errorIcon} />
              </span>
            </p>
          ) : null}
          {formik.touched.message && formik.errors.email ? (
            <p className={styles.error}>
              {formik.errors.email}
              <span>
                <AttentionIcon className={styles.errorIcon} />
              </span>
            </p>
          ) : null}
          {formik.touched.message && formik.errors.message ? (
            <p className={styles.error}>
              {formik.errors.message}
              <span>
                <AttentionIcon className={styles.errorIcon} />
              </span>
            </p>
          ) : null}
        </div>

        <div className={styles.button}>
          <Button type="submit" btnStyle="send">
            Отправить
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
};

export default Feedback;
