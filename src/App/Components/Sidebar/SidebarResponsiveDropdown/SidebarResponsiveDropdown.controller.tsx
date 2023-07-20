
import { LogoutService } from "@clientService/Logout.service";
import {  useNavigate } from "react-router-dom";

const UseResponsiveDropdownController = () => {
  const logoutService = new LogoutService();
  const navigate = useNavigate();

  const doLogout = () => {
    logoutService.logout();
    navigate("/client/login");
  };

  return {
    Actions: {
      logout: doLogout,
     
    },
  };
};

export default UseResponsiveDropdownController;
