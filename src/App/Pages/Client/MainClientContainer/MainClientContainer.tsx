/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import styles from "./MainClientContainer.module.css";
import { Sidebar } from "@components/Sidebar/Sidebar";
import Icons from "@components/Icons/Icons";
import UseMainClientContainerController from "./MainClientContainer.controller";

const MainClientContainer = () => {
  const { Actions, States } = UseMainClientContainerController();

  return (
    <div className={styles.container}>
      <Sidebar.Container>
        <Sidebar.Header onClickImage={Actions.onNavigateHome}>
          {States.icons.map((values, index) => (
            <React.Fragment key={index}>
              <Icons {...values} />
            </React.Fragment>
          ))}
        </Sidebar.Header>
        <Sidebar.Footer />
        <Sidebar.ResponsiveDropdown {...States.dropDownItems} />
      </Sidebar.Container>
      <div className={styles.main_content}>{Actions.onRender()}</div>
    </div>
  );
};

export default MainClientContainer;
