/* eslint-disable @typescript-eslint/ban-types */
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutService } from "@clientService/Logout.service";

const UseBaseController = () => {
  const iconsSize = "1.7rem";
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [dropDownIsOpen, setDropDownIsOpen] = useState<boolean>(false);
  const logoutService = new LogoutService();

  const logout = () => {
    logoutService.logout();
    return pathname.includes("/client")
      ? navigate("/client/login")
      : navigate("/adm/login");
  };

  const openCloseDropDown = () => {
    setDropDownIsOpen(!dropDownIsOpen);
  };

  const logoNavigation = () => {
    return pathname.includes("/client")
      ? navigate("/client/home")
      : navigate("/adm/home");
  };

  return {
    Actions: {
      onLogout: logout,
      onNavigate: navigate,
      onCloseOrOpenDropDown: openCloseDropDown,
      onLogoClick: logoNavigation,
    },
    States: {
      iconsSize,
      pathname,
      dropDownIsOpen,
    },
  };
};

export default UseBaseController;
