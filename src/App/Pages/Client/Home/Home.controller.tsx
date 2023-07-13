import { IconsProps } from "@components/Icons/Icons.types";
import { useLocation, useNavigate } from "react-router-dom";

const UseHomeController = () => {
  const defaultSize = "2rem";
  const defaultPosition = "right";
  const defaultColor = "white";

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const navigateHomeClient = () => {
    navigate("/client/home");
  };

  const verifyIfPathIncludes = (location: string) => {
    return pathname.includes(location);
  };

  const homeIcons: IconsProps[] = [
    {
      icon: "home",
      color: defaultColor,
      size: defaultSize,
      action: () => navigate("/client/home"),
      isActive: verifyIfPathIncludes("/home"),
      tooltip: {
        title: "Home",
        position: defaultPosition,
      },
    },
    {
      icon: "user",
      color: defaultColor,
      size: defaultSize,
      action: () => navigate("/client/user"),
      isActive: verifyIfPathIncludes("/user"),
      tooltip: {
        title: "Minha conta",
        position: defaultPosition,
      },
    },
    {
      icon: "notification",
      color: defaultColor,
      size: defaultSize,
      action: () => navigate("/client/notifications"),
      isActive: verifyIfPathIncludes("/notifications"),
      tooltip: {
        title: "Notificações",
        position: defaultPosition,
      },
    },
    {
      icon: "terms",
      color: defaultColor,
      size: defaultSize,
      action: () => navigate("/client/terms"),
      isActive: verifyIfPathIncludes("/terms"),
      tooltip: {
        title: "Termos",
        position: defaultPosition,
      },
    },
  ];

  return {
    Actions: {
      onNavigateHome: navigateHomeClient,
    },
    States: {
      icons: homeIcons,
    },
  };
};

export default UseHomeController;
