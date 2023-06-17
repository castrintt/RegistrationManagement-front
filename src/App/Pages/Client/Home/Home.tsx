/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";

const Home = () => {
  return (
    <div className={styles.container}>
      <ClientSidebar />
      <div className={styles.main_content}>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
