/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from "react";
import styles from "./Home.module.css";
import commonStyles from "@styles/CommonSidebarWithComponent.module.css";
import ClientSidebar from "@components/Sidebar/Client/ClientSidebar";
import UseHomeController from "./Home.controller";
import { axiosInstances } from "@config/axios.instances";

const Home = () => {
  const doSomething = async () => {
    return await axiosInstances.private
      .get("/Client/get_client_id_and_status")
      .then((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    doSomething();
  }, []);

  const { Actions, States } = UseHomeController();
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
