import React from "react";
import styles from "./ModalTitle.module.css";

type Props = {
  text: string;
};

const ModalTitle = ({ text, ...rest }: Props) => {
  return (
    <h1 className={styles.title} {...rest}>
      {text}
    </h1>
  );
};

export default ModalTitle;
