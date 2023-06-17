import React from "react";
import styles from "./Documents.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";

const Documents = () => {
  return (
    <div className={styles.container}>
      <ClientSidebar />
      <div className={styles.main_content}>
        <h1>Documents</h1>
      </div>
    </div>
  );
};

export default Documents;
