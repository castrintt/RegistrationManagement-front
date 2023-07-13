import { LogoutService } from "@clientService/Logout.service";
import { IconsProps } from "@components/Icons/Icons.types";

const UseSidebarFooterController = () => {
  const logoutService = new LogoutService();

  const logout = () => {
    logoutService.logout();
  };

  const iconProps: IconsProps = {
    icon: "logout",
    color: "white",
    size: "2rem",
    action: logout,
    isActive: false,
    tooltip: { title: "Logout", position: "left" },
  };

  return {
    States: {
      icon: iconProps,
    },
  };
};

export default UseSidebarFooterController;
