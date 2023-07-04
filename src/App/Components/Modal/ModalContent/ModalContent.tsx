import React from "react";
import styles from "./ModalContent.module.css";

type Props = {
  children: React.ReactNode;
  styledId?: string;
};

const ModalContent = ({ styledId, children }: Props) => {
  return (
    <div id={styledId} className={styles.modal_container}>
      {children}
    </div>
  );
};

export default ModalContent;
