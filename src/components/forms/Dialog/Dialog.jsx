import Modal from "components/Modal/Modal";
import Htag from "components//Htag/Htag";
import Button from "components/Button/Button";

import styles from "./Dialog.module.scss";
const Dialog = (props) => {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className={styles.dialog}>
        <Htag tag="h2">{props.header}</Htag>
        <p className={styles.text}>{props.text}</p>
        <Button btnStyle="yellow" onClick={() => props.onClose(false)}>
          Закрыть окно
        </Button>
      </div>
    </Modal>
  );
};

export default Dialog;
