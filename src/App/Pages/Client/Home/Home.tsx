/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import UseHomeController from "./Home.controller";
import StepButton from "@components/StepButton/StepButton";

const Home = () => {
  const { States } = UseHomeController();

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

export default Home;
