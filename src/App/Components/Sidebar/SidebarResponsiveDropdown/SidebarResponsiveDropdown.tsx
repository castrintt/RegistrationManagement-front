import React from "react";
import styles from "./SidebarResponsiveDropdown.module.css";
import Icons from "@components/Icons/Icons";
import UseResponsiveDropdownController from "./SidebarResponsiveDropdown.controller";

export type PathItemsResponsiveSidebar = {
  route: string;
  action: () => void;
};

export type SidebarResponsiveDropdownProps = {
  isOpen: boolean;
  openClose: () => void;
  items: Array<PathItemsResponsiveSidebar>;
};

const SidebarResponsiveDropdown = ({
  items,
  isOpen,
  openClose,
}: SidebarResponsiveDropdownProps) => {
  const { Actions } = UseResponsiveDropdownController();
  return (
    <div className={styles.container}>
      <Icons
        icon="hamburger"
        color="white"
        size="2.2rem"
        action={openClose}
        isActive={false}
        tooltip={{
          title: "",
          position: "bottom",
        }}
      />
      {isOpen && (
        <div className={styles.drop_down_items}>
          {items.map((values, index) => (
            <span  key={index} onClick={values.action}>
              {values.route}
            </span>
          ))}
          <span className={styles.logout_item} onClick={Actions.logout}>Logout</span>
        </div>
      )}
    </div>
  );
};

export default SidebarResponsiveDropdown;
