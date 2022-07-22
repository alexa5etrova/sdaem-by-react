import ReactDOM from "react-dom";
import { useState } from "react";
import Background from "../../components/Background/Background";

import SignIn from "../../components/forms/SignIn/SignIn";
import SignUp from "./../../components/forms/Signup/Signup";
import Confirmed from "./../../components/forms/Confirmed/Confirmed";

import styles from "./Auth.module.scss";

const Auth = (props) => {
  const [showenDialog, setShowenDialog] = useState("login");

  return ReactDOM.createPortal(
    <div class={styles.background}>
      <Background>
        {showenDialog === "login" && <SignIn toSignUp={setShowenDialog} />}
        {showenDialog === "signUp" && <SignUp toLogin={setShowenDialog} />}
        {showenDialog === "confirmed" && <Confirmed toLogin={setShowenDialog} />}
      </Background>
    </div>,
    document.body
  );
};

export default Auth;
