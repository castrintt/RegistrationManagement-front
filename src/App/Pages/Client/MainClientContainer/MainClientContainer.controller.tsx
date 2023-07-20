import { IconsProps } from "@components/Icons/Icons.types";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "@routes/DynamicPaths";
import { useState } from "react";
import { SidebarResponsiveDropdownProps } from "@components/Sidebar/SidebarResponsiveDropdown/SidebarResponsiveDropdown";
import { EIconColor } from "@enums/EIconColor";
import { EIconName } from "@enums/EIconName";

type DefaultIconProps = {
  size: string;
  color: EIconColor;
  position: "right" | "left" | "top" | "bottom";
};

const UseMainClientContainerController = () => {
  const defaultIconsProps: DefaultIconProps = {
    size: "2rem",
    position: "right",
    color: EIconColor.White,
  };
  const [dropDownIsOpen, setDropDownIsOpen] = useState<boolean>(false);

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
      icon: EIconName.Home,
      color: defaultIconsProps.color,
      size: defaultIconsProps.size,
      action: () => navigate("/client/home"),
      isActive: verifyIfPathIncludes("/home"),
      tooltip: {
        title: "Home",
        position: defaultIconsProps.position,
      },
    },
    {
      icon: EIconName.User,
      color: defaultIconsProps.color,
      size: defaultIconsProps.size,
      action: () => navigate("/client/user"),
      isActive: verifyIfPathIncludes("/user"),
      tooltip: {
        title: "Minha conta",
        position: defaultIconsProps.position,
      },
    },
    {
      icon: EIconName.Notification,
      color: defaultIconsProps.color,
      size: defaultIconsProps.size,
      action: () => navigate("/client/notifications"),
      isActive: verifyIfPathIncludes("/notifications"),
      tooltip: {
        title: "Notificações",
        position: defaultIconsProps.position,
      },
    },
    {
      icon: EIconName.Documents,
      color: defaultIconsProps.color,
      size: defaultIconsProps.size,
      action: () => navigate("/client/documents"),
      isActive: verifyIfPathIncludes("/documents"),
      tooltip: {
        title: "Documentos",
        position: defaultIconsProps.position,
      },
    },
    {
      icon: EIconName.NewsLetter,
      color: defaultIconsProps.color,
      size: defaultIconsProps.size,
      action: () => navigate("/client/news-letter"),
      isActive: verifyIfPathIncludes("/news-letter"),
      tooltip: {
        title: "NewsLetter",
        position: defaultIconsProps.position,
      },
    },
  ];

  const navigateAndCloseDropDown = (path: string) => {
    setDropDownIsOpen(!dropDownIsOpen);
    navigate(path);
  };

  const dropDownSection: Array<{
    route: string;
    action: () => void;
  }> = [
    {
      route: "Home",
      action: () => navigateAndCloseDropDown("/client/home"),
    },
    {
      route: "Minha conta",
      action: () => navigateAndCloseDropDown("/client/user"),
    },
    {
      route: "Notificações",
      action: () => navigateAndCloseDropDown("/client/notifications"),
    },
    {
      route: "Documentos",
      action: () => navigateAndCloseDropDown("/client/documents"),
    },
    {
      route: "NewsLetter",
      action: () => navigateAndCloseDropDown("/client/news-letter"),
    },
  ];

  const pathnameComponentsRender = (): JSX.Element => {
    const currentPath = Paths.Client.filter((values) => {
      if (verifyIfPathIncludes(values.path)) {
        return values;
      }
    })[0];
    return currentPath.component;
  };

  const dropDownProperties = (): SidebarResponsiveDropdownProps => {
    return {
      isOpen: dropDownIsOpen,
      openClose: () => setDropDownIsOpen(!dropDownIsOpen),
      items: dropDownSection,
    };
  };

  return {
    Actions: {
      onNavigateHome: navigateHomeClient,
      onRender: pathnameComponentsRender,
    },
    States: {
      icons: homeIcons,
      dropDownItems: dropDownProperties(),
    },
  };
};

export default UseMainClientContainerController;
