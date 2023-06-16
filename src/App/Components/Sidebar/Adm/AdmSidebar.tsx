import React from "react";
import Base from "../Base";
import { useLocation, useNavigate } from "react-router-dom";

const AdmSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Base
      sidebarIcons={[
        {
          icon: "home",
          color: "white",
          size: "0",
          action: () => navigate("/adm/home"),
          isActive: pathname.includes("/adm/home"),
          tooltip: {
            title: "Home",
            position: "right",
          },
        },
        {
          icon: "user",
          color: "white",
          size: "0",
          action: () => navigate("/adm/user"),
          isActive: pathname.includes("/adm/user"),
          tooltip: {
            title: "Minha conta",
            position: "right",
          },
        },
        {
          icon: "configuration",
          color: "white",
          size: "0",
          action: () => navigate("/adm/configuration"),
          isActive: pathname.includes("/adm/configuration"),
          tooltip: {
            title: "Configurações",
            position: "right",
          },
        },
        {
          icon: "key",
          color: "white",
          size: "0",
          action: () => navigate("/adm/permissions"),
          isActive: pathname.includes("/adm/permissions"),
          tooltip: {
            title: "Permissões",
            position: "right",
          },
        },
      ]}
    />
  );
};

export default AdmSidebar;
