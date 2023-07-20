import React from "react";
import styles from './CardSection.module.css'

type CardSectionProps = {
  title: string;
  children: React.ReactNode;
};

const CardSection = ({ title, children }: CardSectionProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default CardSection;
