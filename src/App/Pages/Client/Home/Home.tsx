/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import UseHomeController from "./Home.controller";


const Home = () => {
  const { Actions, States } = UseHomeController();
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
