import { useFormik } from "formik";
import * as Yup from "yup";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { sendMessage } from "../../../redux/messageSlice";
import Button from "../../Button/Button";
import Input from "./../Input/Input";
import FormWrapper from "../FormWrapper/FormWrapper";
import Dialog from "./../Dialog/Dialog";
import { ReactComponent as AttentionIcon } from "./../../../assets/icons/attention.svg";
import { MESSAGE_SENT, MESSAGE_SENT_FAILED } from "../../../data/const";
import Loader from "../../Loader/Loader";
import styles from "./Feedback.module.scss";

const Feedback = (props) => {
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.messages);
  const [showModal, setShowModal] = useState(false);

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
      dispatch(
        sendMessage({
          name: values.name,
          email: values.email,
          message: values.message,
        })
      );
      setShowModal(true);
      formik.resetForm();
    },
  });

  return (
    <FormWrapper>
      {status === "resolved" && (
        <Dialog
          isOpen={showModal}
          text={MESSAGE_SENT.text}
          header={MESSAGE_SENT.header}
          onClose={setShowModal}
        />
      )}
      {status === "rejected" && (
        <Dialog
          isOpen={showModal}
          header={MESSAGE_SENT_FAILED.header}
          text={error}
          onClose={setShowModal}
        />
      )}
      {status === "loading" && <Loader />}

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={cn(styles.name, styles.inputWrapper)}>
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
            error={formik.errors.name && formik.touched.name}
          />
        </div>
        <div className={cn(styles.email, styles.inputWrapper)}>
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
            error={formik.errors.email && formik.touched.email}
          />
        </div>
        <div className={cn(styles.inputWrapper, styles.message)}>
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
            className={cn(styles.textarea, {
              [styles.errorTextarea]:
                formik.errors.message && formik.touched.message,
            })}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && formik.touched.message && (
            <div className={styles.errorTextAreaIcon}>
              <AttentionIcon />
            </div>
          )}
        </div>
        <div className={styles.errorWrapper}>
          {formik.touched.name && formik.errors.name !== undefined ? (
            <p className={styles.error}>
              {formik.errors.name}
              <span>
                <AttentionIcon className={styles.errorIcon} />
              </span>
            </p>
          ) : null}
          {formik.touched.email && formik.errors.email !== undefined ? (
            <p className={styles.error}>
              {formik.errors.email}
              <span>
                <AttentionIcon className={styles.errorIcon} />
              </span>
            </p>
          ) : null}
          {formik.touched.message && formik.errors.message !== undefined ? (
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
