import Application from "@clientPages/Notifications/Notifications";
import Documents from "@clientPages/Documents/Documents";
import Home from "@clientPages/Home/Home";
import User from "@clientPages/User/User";
import { IconsProps } from "@components/Icons/Icons.types";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "@routes/DynamicPaths";

const UseMainClientContainerController = () => {
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
      icon: "documents",
      color: defaultColor,
      size: defaultSize,
      action: () => navigate("/client/documents"),
      isActive: verifyIfPathIncludes("/documents"),
      tooltip: {
        title: "Documentos",
        position: defaultPosition,
      },
    },
  ];

  const pathnameComponentsRender = () => {
    const pathOption = Paths.Client.filter((values) => {
      if (verifyIfPathIncludes(values.path)) {
        return values;
      }
    })[0];
    return pathOption.component;
  };

  return {
    Actions: {
      onNavigateHome: navigateHomeClient,
    },
    States: {
      icons: homeIcons,
      Render: pathnameComponentsRender,
    },
  };
};

export default UseMainClientContainerController;
