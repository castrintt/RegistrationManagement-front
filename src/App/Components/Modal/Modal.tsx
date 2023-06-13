import React from "react";
import styles from "./Modal.module.css";

type Props = {

  isOpen: boolean;
  children: JSX.Element;
};

const Modal = ({ isOpen, children }: Props) => {
  return (
    <dialog className={styles.dialog_black_screen} open={isOpen}>
      {children}
    </dialog>
  );
};

export default Modal;
