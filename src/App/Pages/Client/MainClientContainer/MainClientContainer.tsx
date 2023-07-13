/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import globals from "@styles/CommonSidebarWithComponent.module.css";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Icons from "@components/Icons/Icons";
import UseMainClientContainerController from "./MainClientContainer.controller";

const MainClientContainer = () => {
  const { Actions, States } = UseMainClientContainerController();

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
      <div className={globals.main_content}>{States.Render()}</div>
    </div>
  );
};

export default MainClientContainer;
