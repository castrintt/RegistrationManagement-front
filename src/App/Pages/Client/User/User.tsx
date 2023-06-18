import React from "react";
import styles from "./User.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";
import commonStyles from "../../../styles/CommonSidebarWithComponent.module.css";

const User = () => {
  return (
     <div className={commonStyles.container}>
      <ClientSidebar />
      <div
        className={`${commonStyles.main_content} ${styles.user_main_content}`}
      >
        <h1>User</h1>
      </div>
    </div>
  );
};

export default User;
