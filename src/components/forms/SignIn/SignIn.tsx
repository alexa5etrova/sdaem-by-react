import { useFormik } from "formik";
import * as Yup from "yup";
import cn from "classnames";
import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../../../hook/redux";
import { SignInProps } from "./SignIn.props";
import { UserModel } from "../../../interfaces/auth.interface";
import { AUTH_OK, AUTH_SENT_FAILED } from "../../../data/auth";
import { userSignIn } from "../../../redux/authSlice";
import Loader from "../../Loader/Loader";
import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../Input/Input";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import Switch from "../Switch/Switch";
import Dialog from "../Dialog/Dialog";
import AttentionIcon from "../../../assets/icons/AttentionIcon";

import styles from "./SignIn.module.scss";

const SignIn = ({ toSignUp, ...props }: SignInProps): JSX.Element => {
  const { status, error } = useAppSelector((state) => state.auth);
  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: { email: "", password: "", rememberMe: false },
    validationSchema: Yup.object({
      login: Yup.string()
        .email("Введите корректный email адрес")
        .required("Необходимо ввести логин"),
      password: Yup.string().required("Введите пароль"),
    }),

    onSubmit: (values: UserModel) => {
      dispatch(
        userSignIn({
          email: values.email,
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
      {status === "resolved" && (
        <Dialog isOpen={showModal} header={AUTH_OK.header} text="" onClose={setShowModal} />
      )}

      {status === "rejected" && (
        <Dialog
          isOpen={showModal}
          header={AUTH_SENT_FAILED.header}
          text={error}
          onClose={setShowModal}
        />
      )}
      {status === "loading" && <Loader />}
      <FormWrapper wrStyle="auth">
        <div className={styles.authWrapper}>
          <Htag tag="h2">Авторизация</Htag>
          <p className={styles.text}>Авторизируйтесь, чтобы начать публиковать свои объявления</p>
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              type="email"
              name="email"
              id="login"
              value={formik.values.email}
              placeholder="Логин"
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
            <div className={styles.textWrapper}>
              <Switch
                onChange={formik.handleChange}
                name="rememberMe"
                checked={formik.values.rememberMe}
              >
                Запомнить меня
              </Switch>
              <p className={styles.toSignUp}>Забыли пароль?</p>
            </div>

            {formik.touched.login && formik.errors.login !== "" ? (
              <p className={styles.error}>
                {formik.errors.login}
                <span>
                  <AttentionIcon className={styles.errorIcon} />
                </span>
              </p>
            ) : null}
            {formik.touched.password && formik.errors.password !== "" ? (
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
                  toSignUp("signUp");
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
