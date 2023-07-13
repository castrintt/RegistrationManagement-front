import React from "react";
import styles from "./SidebarContainer.module.css";

type Props = {
  children: React.ReactNode;
};

const SidebarContainer = ({ children }: Props) => {
  return <aside className={styles.container}>{children}</aside>;
};

export default SidebarContainer;
