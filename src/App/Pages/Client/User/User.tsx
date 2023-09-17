import React from "react";
import styles from "./User.module.css";
import UseUserController from "./User.controller";
import StepButton from "@components/StepButton/StepButton";

const User = () => {
  const { States } = UseUserController();

  return (
    <div className={styles.container}>
      <div className={styles.steps}>
        {States.stepProperties.map((values, index) => (
          <React.Fragment key={index}>
            <StepButton {...values} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default User;
