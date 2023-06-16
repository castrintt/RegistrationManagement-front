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
          size: "0",
          action: () => navigate("/client/home"),
          isActive: pathname.includes("/client/home"),
          tooltip: {
            title: "Home",
            position: "right",
          },
        },
        {
          icon: "user",
          color: "white",
          size: "0",
          action: () => navigate("/client/user"),
          isActive: pathname.includes("/client/user"),
          tooltip: {
            title: "Minha conta",
            position: "right",
          },
        },
        {
          icon: "dashboard",
          color: "white",
          size: "0",
          action: () => navigate("/client/application"),
          isActive: pathname.includes("/client/application"),
          tooltip: {
            title: "Aplicações",
            position: "right",
          },
        },
      ]}
    />
  );
};

export default ClientSidebar;
