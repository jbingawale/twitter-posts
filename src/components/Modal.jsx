import { useNavigate } from "react-router-dom";
import classess from "./Modal.module.css";

function Modal({ children }) {
  const navigate = useNavigate();
  function closeHandler() {
    navigate("..");
  }

  return (
    <>
      <div className={classess.backdrop} onClick={closeHandler} />
      <dialog open className={classess.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
