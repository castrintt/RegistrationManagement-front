/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styles from "./Buttons.module.css";

export type Props = {
  onClickMethod: Function;
  buttonText: string;
  variant: "edit" | "delete" | "create" | "createFull";
  type?: "submit" | "button";
  width:string;
  disabled?: boolean;
};

const Buttons = ({
  onClickMethod,
  buttonText,
  type,
  variant,
  disabled,
  width
}: Props) => {
  const buttonClasses = {
    edit: styles.edit,
    delete: styles.delete,
    create: styles.create,
    createFull: styles.create_full,
  };
  return (
    <button
      id={styles.id_button}
      className={buttonClasses[variant]}
      type={type ? type : "button"}
      onClick={() => onClickMethod()}
      disabled={disabled ? disabled : false}
      style={{width:width}}
    >
      {buttonText}
    </button>
  );
};

export default Buttons;
