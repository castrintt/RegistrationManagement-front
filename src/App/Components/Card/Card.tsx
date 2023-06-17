/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Card.module.css";

type DataProps = { label: string; value: any };

type Props = {
  title: string;
  data: DataProps[];
};

const Card = ({ title, data }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{title}</h1>
        <div className={styles.content_labels}>
          {data.map((values: DataProps, index: number) => (
            <label key={index}>
              <span>{values.label}</span>
              <span>{values.value ?? ""}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
