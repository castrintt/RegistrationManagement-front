import React from "react";
import UseStepButtonController from "./StepButton.controller";
import styles from "./StepButton.module.css";

type StepButtonProps = {
  action: () => void;
  text: string;
  active: boolean;
};

const StepButton = ({ action, text, active }: StepButtonProps) => {
  const { Actions, States } = UseStepButtonController({ active, text, action });
  return (
    <div
      id={styles.default}
      className={Actions.onRenderStyle}
      onClick={Actions.onClick}
    >
      {States.description}
    </div>
  );
};

export default StepButton;
