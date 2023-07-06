export type Colors =
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "lightBlue"
  | "darkBlue"
  | "white"
  | "disabled";

export type IconName =
  | "pending"
  | "home"
  | "user"
  | "dashboard"
  | "logout"
  | "hamburger"
  | "notification"
  | "terms"
  | "filter"
  | "inService"
  | "exclamation"
  | "warning"
  | "closed"
  | "cutEye"
  | "openEye"
  | "closedEye"
  | "configuration"
  | "key"
  | "group"
  | "admUser"
  | "search"
  | "add"
  | "edit"
  | "trash"
  | "drag"
  | "aproveDocument"
  | "documents"
  | "configTerms"
  | "address";

export type IconsProps = {
  icon: IconName;
  color: Colors;
  size: string;
  action: () => void;
  isActive: boolean;
  tooltip: { title: string; position: "left" | "right" | "top" | "bottom" };
};
