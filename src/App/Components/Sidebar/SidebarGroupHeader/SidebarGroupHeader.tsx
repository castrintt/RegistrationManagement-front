import React from "react";
import styles from "./SidebarGroupHeader.module.css";
import WhiteLabelImage from "@assets/white-label.png";

type SidebarGroupHeaderProps = {
  onClickImage: () => void;
  children: React.ReactNode;
};

const SidebarGroupHeader = ({
  onClickImage,
  children,
}: SidebarGroupHeaderProps) => {
  return (
    <div className={styles.container}>
        <img
          data-cy="logo-image"
          src={WhiteLabelImage}
          alt="Logo"
          onClick={onClickImage}
        />
      {children}
    </div>
  );
};

export default SidebarGroupHeader;
