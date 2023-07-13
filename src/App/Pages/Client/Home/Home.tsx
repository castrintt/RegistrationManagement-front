/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./Home.module.css";
import globals from "@styles/CommonSidebarWithComponent.module.css";
import UseHomeController from "./Home.controller";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Icons from "@components/Icons/Icons";

const Home = () => {
  const { Actions, States } = UseHomeController();
  return (
    <div className={globals.container}>
      <Sidebar.Container>
        <Sidebar.Header onClickImage={Actions.onNavigateHome}>
          {States.icons.map((values, index) => (
            <React.Fragment key={index}>
              <Icons {...values} />
            </React.Fragment>
          ))}
        </Sidebar.Header>
        <Sidebar.Footer />
      </Sidebar.Container>
      <div className={`${globals.main_content} ${styles.home_main_content}`}>
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;
