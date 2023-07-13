import React from "react";
import UseSidebarFooterController from "./SidebarFooter.controller";
import Icons from "@components/Icons/Icons";
import styles from './SidebarFooter.module.css'

const SidebarFooter = () => {
  const { States } = UseSidebarFooterController();
  return (
    <div className={styles.container}>
      <Icons {...States.icon} />
    </div>
  );
};

export default SidebarFooter;
