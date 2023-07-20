import { LogoutService } from "@clientService/Logout.service";
import { IconsProps } from "@components/Icons/Icons.types";
import { EIconColor } from "@enums/EIconColor";
import { EIconName } from "@enums/EIconName";
import { useLocation, useNavigate } from "react-router-dom";

const UseSidebarFooterController = () => {
  const logoutService = new LogoutService();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const logout = () => {
    logoutService.logout();
    pathname.includes("/client")
      ? navigate("/client/login")
      : navigate("/adm/login");
  };

  const iconProps: IconsProps = {
    icon: EIconName.Logout,
    color: EIconColor.White,
    size: "1.7rem",
    action: logout,
    isActive: false,
    tooltip: { title: "Logout", position: "right" },
  };

  return {
    States: {
      icon: iconProps,
    },
  };
};

export default UseSidebarFooterController;
