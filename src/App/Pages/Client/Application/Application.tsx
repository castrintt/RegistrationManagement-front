import React from "react";
import styles from "./Application.module.css";
import ClientSidebar from "@components/Sidebar/Client/ClientSidebar";
import commonStyles from "@styles/CommonSidebarWithComponent.module.css";

const Application = () => {
  return (
    <div className={commonStyles.container}>
      <ClientSidebar />
      <div
        className={`${commonStyles.main_content} ${styles.application_main_content}`}
      >
        <h1>Application</h1>
      </div>
    </div>
  );
};

export default Application;
