import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import { userSignUp } from "../../../redux/authSlice";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../Input/Input";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import Dialog from "../Dialog/Dialog";

import { SIGNUP_FAILED, USER_AGREEMENT } from "../../../data/auth";
import AttentionIcon from "../../../assets/icons/AttentionIcon";
import styles from "./Signup.module.scss";
import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { UserModel } from "./../../../interfaces/auth.interface";
import { SignUpProps } from "./Signup.props";

const SignUp = ({ toLogin }: SignUpProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { status, error } = useAppSelector((state) => state.auth);
  const [showModal, setShowModal] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      login: "",
      email: "",
      password: "",
      pswdRepeat: "",
      reCaptcha: true,
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .min(5, "Введите не менее 5 символов")
        .max(20, "Введите не более 20 символов")
        .required("Необходимо ввести логин"),
      email: Yup.string()
        .email("Введите корректный email адрес")
        .required("Необходимо заполнить поле email"),
      password: Yup.string()
        .required("Введите пароль")
        .matches(/[a-zA-Z]/, "Пароль должен содержать только латинские буквы"),
      pswdRepeat: Yup.string()
        .required("Повторите пароль")
        .oneOf([Yup.ref("password")], "Пароль не совпадает!"),
    }),

    onSubmit: (values: UserModel) => {
      dispatch(
        userSignUp({
          login: values.login,
          email: values.email,
          password: values.password,
        })
      );
      setShowModal(true);
      formik.resetForm();
    },
  });
  if (status === "rejected") {
    return (
      <Dialog
        isOpen={showModal}
        header={SIGNUP_FAILED.header}
        text={error}
        onClose={setShowModal}
      />
    );
  }

  if (status === "resolved") {
    toLogin("confirmed");
  }

  return (
    <div className={styles.auth}>
      <FormWrapper wrStyle="signup">
        <div className={styles.authWrapper}>
          <Htag tag="h2">Регистрация</Htag>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              type="text"
              name="login"
              id="login"
              value={formik.values.login}
              placeholder="Логин"
              onChange={formik.handleChange}
              inputStyle="formInput"
              onBlur={formik.handleBlur}
              error={formik.errors.login !== "" && formik.touched.login}
              errorStyle="auth"
            />
            <Input
              type="email"
              name="email"
              id="email"
              value={formik.values.email}
              placeholder="Электронная почта"
              onChange={formik.handleChange}
              inputStyle="formInput"
              onBlur={formik.handleBlur}
              error={formik.errors.email !== "" && formik.touched.email}
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
              error={formik.errors.password !== "" && formik.touched.password}
              errorStyle="auth"
            />
            <Input
              type="password"
              name="pswdRepeat"
              id="pswdRepeat"
              value={formik.values.pswdRepeat}
              placeholder="Повторите пароль"
              onChange={formik.handleChange}
              inputStyle="formInput"
              onBlur={formik.handleBlur}
              error={formik.errors.pswdRepeat !== "" && formik.touched.pswdRepeat}
              errorStyle="auth"
            />
            <ReCAPTCHA
              className={styles.captcha}
              sitekey="6LedCwchAAAAAFFkiA2fozWA_jy4Lt8tQn1NL07g"
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

            {formik.touched.email && formik.errors.email !== undefined ? (
              <p className={styles.error}>
                {formik.errors.email}
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
            {formik.touched.pswdRepeat && formik.errors.pswdRepeat !== undefined ? (
              <p className={styles.error}>
                {formik.errors.pswdRepeat}
                <span>
                  <AttentionIcon className={styles.errorIcon} />
                </span>
              </p>
            ) : null}

            <Button type="submit" btnStyle="yellow">
              Зарегистрироваться
            </Button>
          </form>
        </div>
        <div>
          <p className={styles.agreeHeader}>{USER_AGREEMENT.header}</p>
          <ul className={styles.agreeParag}>
            <li>{USER_AGREEMENT.p1}</li>
            <li>{USER_AGREEMENT.p2}</li>
          </ul>
          <p className={styles.text}>
            Уже есть аккаунт?
            <span
              className={styles.toLogin}
              onClick={() => {
                toLogin("login");
              }}
            >
              Войдите
            </span>
          </p>
        </div>
      </FormWrapper>
    </div>
  );
};

export default SignUp;
