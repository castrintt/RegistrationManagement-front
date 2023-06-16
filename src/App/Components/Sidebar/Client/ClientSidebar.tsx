import React from "react";
import Base from "../Base";
import { useLocation, useNavigate } from "react-router-dom";

const ClientSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Base
      sidebarIcons={[
        {
          icon: "home",
          color: "white",
          size: "4rem",
          action: () => navigate("/client/home"),
          isActive: pathname.includes("/client/home"),
        },
        {
          icon: "user",
          color: "white",
          size: "4rem",
          action: () => navigate("/client/user"),
          isActive: pathname.includes("/client/user"),
        },
        {
          icon: "dashboard",
          color: "white",
          size: "4rem",
          action: () => navigate("/client/application"),
          isActive: pathname.includes("/client/application"),
        },
      ]}
    />
  );
};

export default ClientSidebar;
