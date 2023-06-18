/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React, { useState } from "react";
import styles from "./Base.module.css";
import Icons, { IconsProps } from "../Icons/Icons";
import WhiteLabelImage from "../../Assets/white-label.png";
import { useLocation, useNavigate } from "react-router-dom";
import { LogoutService } from "./../../../../business/service/client/Logout.service";

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

  return (
    <aside className={styles.container}>
      <div className={styles.image_container}>
        <img
          data-cy="logo-image"
          src={WhiteLabelImage}
          alt="enterprise image"
          onClick={() => {
            pathname.includes("/client")
              ? navigate("/client/home")
              : navigate("/adm/home");
          }}
        />
      </div>
      <div className={styles.main_icons}>
        {sidebarIcons.map((values: IconsProps, index: number) => (
          <React.Fragment key={index}>
            <Icons
              icon={values.icon}
              color={"white"}
              size={iconsSize}
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
          size={iconsSize}
          action={() => logout()}
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
          size={iconsSize}
          action={() => setDropDownIsOpen(!dropDownIsOpen)}
          isActive={false}
          tooltip={{
            title: "Menu",
            position: "bottom",
          }}
        />
      </div>
      {dropDownIsOpen && (
        <div className={styles.drop_down_items}>
          {responsiveDescription.map(
            (values: ResponsiveProps, index: number) => (
              <span
                key={index}
                onClick={() => navigate(values.redirectPath)}
                className={values.isActive ? styles.selected : ""}
              >
                {values.name}
              </span>
            )
          )}
          <span onClick={() => logout()}>Logout</span>
        </div>
      )}
    </aside>
  );
};

export default Base;
