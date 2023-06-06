/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styles from "./Buttons.module.css";

type Props = {
  onClickMethod: Function;
  buttonText: string;
  variant: "edit" | "delete" | "create";
  type?: "submit" | "button";
  disabled?: boolean;
};

const Buttons = ({
  onClickMethod,
  buttonText,
  type,
  variant,
  disabled,
}: Props) => {
  const buttonClasses = {
    edit: styles.edit,
    delete: styles.delete,
    create: styles.create,
  };
  return (
    <button
      id={styles.id_button}
      className={buttonClasses[variant]}
      type={type ? type : "button"}
      onClick={() => onClickMethod()}
      disabled={disabled ? disabled : false}
    >
      {buttonText}
    </button>
  );
};

export default Buttons;
