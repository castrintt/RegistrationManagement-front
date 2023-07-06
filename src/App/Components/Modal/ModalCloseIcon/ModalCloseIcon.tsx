import React from "react";
import styles from "./ModalCloseIcon.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

type Props = {
  action: () => void;
};

const ModalCloseIcon = ({ action }: Props) => {
  return <AiFillCloseCircle className={styles.icon} onClick={action} />;
};

export default ModalCloseIcon;
