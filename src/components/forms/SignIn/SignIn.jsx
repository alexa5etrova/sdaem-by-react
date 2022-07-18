import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

import FormWrapper from "../FormWrapper/FormWrapper";
import Input from "../Input/Input";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import Switch from "./../Switch/Switch";

import styles from "./SignIn.module.scss";

const SignIn = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: { login: "", password: "" },
    validationSchema: Yup.object({
      login: Yup.string()
        .email("Введите корректный email адрес")
        .required("Необходимо заполнить поле email"),
      password: Yup.string()
        .max(200, "Сообщение должно содержать не более 200 символов")
        .min(50, "Сообщение должно содержать не менее 50 символов")
        .required("Необходимо заполнить поле сообщения"),
    }),
    onSubmit: (values) => {
      dispatch({
        login: values.login,
        password: values.password,
      });

      formik.resetForm();
    },
  });
  return (
    <div className={styles.auth}>
      <FormWrapper wrStyle="auth">
        <div className={styles.authWrapper}>
          <Htag tag="h2">Авторизация</Htag>
          <p className={styles.text}>
            Авторизируйтесь, чтобы начать публиковать свои объявления
          </p>
          <form>
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
            />
            <Switch>Запомнить меня</Switch>
            Забыли пароль?
            <Button btnStyle="yellow">Войти</Button>
            <p className={styles.text}>
              Еще нет аккаунта
              <span
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
