import React from "react";
import CardItem, { CardItemProps } from "../CardItem/CardItem";
import styles from './CardGroupItems.module.css'

type CardGroupItemsProps = {
  items: Array<CardItemProps>;
};

const CardGroupItems = ({ items }: CardGroupItemsProps) => {
  return (
    <div className={styles.container}>
      {items.map((values, index: number) => (
        <React.Fragment key={index}>
          <CardItem labelText={values.labelText}>{values.children}</CardItem>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CardGroupItems;
