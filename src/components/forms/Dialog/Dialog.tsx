import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";
import Modal from "../../Modal/Modal";
import Htag from "../../Htag/Htag";
import Button from "../../Button/Button";
import { DialogProps } from "./Dialog.props";

import styles from "./Dialog.module.scss";

const Dialog = ({ isOpen, header, text, onClose, form }: DialogProps): JSX.Element => {
  const navigate = useNavigate();

  const btnClickhandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (form === "signIn") {
      navigate("/");
    }
    onClose(false);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.dialog}>
        <Htag tag="h2">{header}</Htag>
        <p className={styles.text}>{text}</p>
        <Button btnStyle="yellow" onClick={(e) => btnClickhandler(e)}>
          Закрыть окно
        </Button>
      </div>
    </Modal>
  );
};

export default Dialog;
