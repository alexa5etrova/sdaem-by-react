import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { userSignIn } from "../../../redux/authSlice";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../Input/Input";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import Dialog from "./../Dialog/Dialog";
import { ReactComponent as AttentionIcon } from "./../../../assets/icons/attention.svg";
import { AUTH_SENT_FAILED } from "../../../data/const";
import { USER_AGREEMENT } from "./../../../data/const";

import styles from "./Signup.module.scss";

const SignUp = (props) => {
  const { status, error } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { login: "", password: "", reCaptcha: true },
    validationSchema: Yup.object({
      login: Yup.string()
        .email("Введите корректный email адрес")
        .required("Необходимо ввести логин"),
      password: Yup.string().required("Введите пароль"),
    }),

    onSubmit: (values) => {
      dispatch(
        userSignIn({
          email: values.login,
          password: values.password,
          rememberMe: values.rememberMe,
        })
      );
      setShowModal(true);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.auth}>
      {status === "rejected" && (
        <Dialog
          isOpen={showModal}
          header={AUTH_SENT_FAILED.header}
          text={error}
          onClose={setShowModal}
        />
      )}
      <FormWrapper wrStyle="signup">
        <div className={styles.authWrapper}>
          <Htag tag="h2">Регистрация</Htag>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              type="text"
              name="login"
              id="login"
              value={formik.values.email}
              placeholder="Логин"
              onChange={formik.handleChange}
              inputStyle="formInput"
              onBlur={formik.handleBlur}
              error={formik.errors.login && formik.touched.login}
              errorStyle="auth"
            />
            <Input
              type="password"
              name="password"
              id="password"
              value={formik.values.password}
              placeholder="Пароль"
              onChange={formik.handleChange}
              inputStyle="formInput"
              onBlur={formik.handleBlur}
              error={formik.errors.password && formik.touched.password}
              errorStyle="auth"
            />
            <ReCAPTCHA
              className={styles.captcha}
              sitekey="6LedCwchAAAAAFFkiA2fozWA_jy4Lt8tQn1NL07g"
              onChange={formik.onChange}
              value={formik.values.reCaptcha}
            />

            {formik.touched.login && formik.errors.login !== undefined ? (
              <p className={styles.error}>
                {formik.errors.login}
                <span>
                  <AttentionIcon className={styles.errorIcon} />
                </span>
              </p>
            ) : null}
            {formik.touched.password && formik.errors.password !== undefined ? (
              <p className={styles.error}>
                {formik.errors.password}
                <span>
                  <AttentionIcon className={styles.errorIcon} />
                </span>
              </p>
            ) : null}
            <Button type="submit" btnStyle="yellow">
              Войти
            </Button>
            <p className={cn(styles.text, styles.signUpholder)}>
              Еще нет аккаунта?
              <span
                className={styles.toSignUp}
                onClick={() => {
                  props.toSignUp("signUp");
                }}
              >
                Создайте аккаунт
              </span>
            </p>
          </form>
        </div>
        <div>
          <p>{USER_AGREEMENT.header}</p>
          <ul>
            <li>{USER_AGREEMENT.p1}</li>
            <li>{USER_AGREEMENT.p2}</li>
          </ul>
        </div>
      </FormWrapper>
    </div>
  );
};

export default SignUp;
