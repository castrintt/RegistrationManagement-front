import React from "react";
import styles from "./Documents.module.css";
import ClientSidebar from "../../../Components/Sidebar/Client/ClientSidebar";
import commonStyles from "../../../styles/CommonSidebarWithComponent.module.css";

const Documents = () => {
  return (
    <div className={commonStyles.container}>
      <ClientSidebar />
      <div
        className={`${commonStyles.main_content} ${styles.documents_main_content}`}
      >
        <h1>Documents</h1>
      </div>
    </div>
  );
};

export default Documents;
