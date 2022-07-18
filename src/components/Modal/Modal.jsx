import ReactDOM from "react-dom";
import styles from "./Modal.module.scss";

const Modal = (props) => {
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={() => props.onClose(false)}>
      {props.children}
    </div>,
    document.body
  );
};

export default Modal;
