import React from "react";
import styles from "./Application.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";

const Application = () => {
  return (
    <div className={styles.container}>
      <ClientSidebar />
      <div className={styles.main_content}>
        <h1>Application</h1>
      </div>
    </div>
  );
};

export default Application;
