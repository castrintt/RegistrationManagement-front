import React from "react";
import styles from "./Modal.module.css";

type Props = {
  width: number;
  height: number;
  isOpen: boolean;
  children: JSX.Element;
};

const Modal = ({ width, height, isOpen, children }: Props) => {
  return (
    <dialog className={styles.dialog_black_screen} open={isOpen}>
      <main
        className={styles.main_content}
        style={{
          width: `${width}rem`,
          height: `${height}rem`,
        }}
      >
        {children}
      </main>
    </dialog>
  );
};

export default Modal;
