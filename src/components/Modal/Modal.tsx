import ReactDOM from "react-dom";
import { ModalProps } from "./Modal.props";
import styles from "./Modal.module.scss";

const Modal = ({ isOpen, onClose, children }: ModalProps): JSX.Element => {
  if (!isOpen) return <></>;
  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={() => onClose(false)}>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
