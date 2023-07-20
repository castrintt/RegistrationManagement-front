import React from "react";
import styles from "./CardItem.module.css";

export type CardItemProps = {
  labelText: string;
  children: React.ReactNode;
};

const CardItem = ({ labelText, children }: CardItemProps) => {
  return (
    <label className={styles.label_container}>
      <span>{labelText}</span>
      {children}
    </label>
  );
};

export default CardItem;
