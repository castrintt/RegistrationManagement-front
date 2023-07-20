import React from "react";
import styles from './CardContainer.module.css'

type CardContainerProps = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default CardContainer;
