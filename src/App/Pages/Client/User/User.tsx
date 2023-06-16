import React from "react";
import styles from "./User.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";

const User = () => {
  return (
    <div className={styles.container}>
      <ClientSidebar />
      <div className={styles.main_content}>
        <h1>User</h1>
      </div>
    </div>
  );
};

export default User;
