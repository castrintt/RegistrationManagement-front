/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import commonStyles from "../../../styles/CommonSidebarWithComponent.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";

const Home = () => {
  return (
    <div className={commonStyles.container}>
      <ClientSidebar />
      <div
        className={`${commonStyles.main_content} ${styles.home_main_content}`}
      >
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
