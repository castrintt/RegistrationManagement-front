import React from "react";
import styles from "./ModalText.module.css";

type Props = {
  text: string;
};

const ModalText = ({ text, ...rest }: Props) => {
  return (
    <p {...rest} className={styles.modal_text}>
      {text}
    </p>
  );
};

export default ModalText;
