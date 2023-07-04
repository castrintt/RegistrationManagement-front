/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styles from "./Base.module.css";
import Icons, { IconsProps } from "../Icons/Icons";
import WhiteLabelImage from "../../Assets/white-label.png";
import UseBaseController from "./Base.controller";

type ResponsiveProps = {
  name: string;
  redirectPath: string;
  isActive: boolean;
};

type Props = {
  sidebarIcons: IconsProps[];
  responsiveDescription: ResponsiveProps[];
};

const Base = ({ sidebarIcons, responsiveDescription }: Props) => {
  const { Actions, States } = UseBaseController();
  return (
    <aside className={styles.container}>
      <div className={styles.image_container}>
        <img
          data-cy="logo-image"
          src={WhiteLabelImage}
          alt="enterprise image"
          onClick={Actions.onLogoClick}
        />
      </div>
      <div className={styles.main_icons}>
        {sidebarIcons.map((values: IconsProps, index: number) => (
          <React.Fragment key={index}>
            <Icons
              icon={values.icon}
              color={"white"}
              size={States.iconsSize}
              action={values.action}
              isActive={values.isActive}
              tooltip={values.tooltip}
            />
          </React.Fragment>
        ))}
      </div>
      <div className={styles.logout}>
        <Icons
          icon={"logout"}
          color={"white"}
          size={States.iconsSize}
          action={Actions.onLogout}
          isActive={false}
          tooltip={{
            title: "Logout",
            position: "right",
          }}
        />
      </div>
      <div className={styles.drop_down}>
        <Icons
          icon={"hamburger"}
          color={"white"}
          size={States.iconsSize}
          action={Actions.onCloseOrOpenDropDown}
          isActive={false}
          tooltip={{
            title: "Menu",
            position: "bottom",
          }}
        />
      </div>
      {States.dropDownIsOpen && (
        <div className={styles.drop_down_items}>
          {responsiveDescription.map(
            (values: ResponsiveProps, index: number) => (
              <span
                key={index}
                onClick={() => Actions.onNavigate(values.redirectPath)}
                className={values.isActive ? styles.selected : ""}
              >
                {values.name}
              </span>
            )
          )}
          <span onClick={Actions.onLogout}>Logout</span>
        </div>
      )}
    </aside>
  );
};

export default Base;
