import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { useState } from "react";

import { userSignIn } from "../../../redux/authSlice";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../Input/Input";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import Switch from "./../Switch/Switch";
import Dialog from "./../Dialog/Dialog";
import { ReactComponent as AttentionIcon } from "./../../../assets/icons/attention.svg";
import { AUTH_SENT_FAILED } from "../../../data/const";

import styles from "./SignIn.module.scss";

const SignIn = (props) => {
  const { status, error } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { login: "", password: "", rememberMe: false },
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
      <FormWrapper wrStyle="auth">
        <div className={styles.authWrapper}>
          <Htag tag="h2">Авторизация</Htag>
          <p className={styles.text}>
            Авторизируйтесь, чтобы начать публиковать свои объявления
          </p>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              type="email"
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
            <div className={styles.textWrapper}>
              <Switch
                onChange={formik.handleChange}
                name="rememberMe"
                value={formik.values.email}
              >
                Запомнить меня
              </Switch>
              <p className={styles.toSignUp}>Забыли пароль?</p>
            </div>

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
      </FormWrapper>
    </div>
  );
};

export default SignIn;
