import React, { useState } from "react";
import Base from "../Base";
import { IconName } from "../../Icons/Icons";

const AdmSidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState<IconName>("home");

  const selectIcon = (icon: IconName) => {
    setSelectedIcon(icon);
  };

  return (
    <Base
      sidebarIcons={[
        {
          icon: "home",
          color: "white",
          size: "4rem",
          action: () => selectIcon("home"),
          isActive: selectedIcon === "home",
        },
        {
          icon: "user",
          color: "white",
          size: "4rem",
          action: () => selectIcon("user"),
          isActive: selectedIcon === "user",
        },
        {
          icon: "configuration",
          color: "white",
          size: "4rem",
          action: () => selectIcon("configuration"),
          isActive: selectedIcon === "configuration",
        },
        {
          icon: "key",
          color: "white",
          size: "4rem",
          action: () => selectIcon("key"),
          isActive: selectedIcon === "key",
        },
      ]}
    />
  );
};

export default AdmSidebar;
