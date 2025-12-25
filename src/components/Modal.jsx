import classess from "./Modal.module.css";

function Modal({ children, onClose }) {
  return (
    <>
      <div className={classess.backdrop} onClick={onClose} />
      <dialog open className={classess.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
