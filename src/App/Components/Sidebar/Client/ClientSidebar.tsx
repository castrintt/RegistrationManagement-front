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
          icon: "documents",
          color: "white",
          size: "0",
          action: () => navigate("/client/documents"),
          isActive: pathname.includes("/client/documents"),
          tooltip: {
            title: "Documents",
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
      responsiveDescription={[
        {
          name: "Home",
          redirectPath: "/client/home",
          isActive: pathname.includes("/client/home"),
        },
        {
          name: "Minha conta",
          redirectPath: "/client/user",
          isActive: pathname.includes("/client/user"),
        },
        {
          name: "Documentos",
          redirectPath: "/client/documents",
          isActive: pathname.includes("/client/documents"),
        },
        {
          name: "Aplicações",
          redirectPath: "/client/application",
          isActive: pathname.includes("/client/application"),
        },
      ]}
    />
  );
};

export default ClientSidebar;
