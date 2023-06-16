/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styles from "./Base.module.css";
import Icons, { IconsProps } from "../Icons/Icons";
import WhiteLabelImage from "../../Assets/white-label.png";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  sidebarIcons: IconsProps[];
};

const Base = ({ sidebarIcons }: Props) => {
  const iconsSize = "1.7rem";
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
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
            />
          </React.Fragment>
        ))}
      </div>
      <div className={styles.logout}>
        <Icons
          icon={"logout"}
          color={"white"}
          size={iconsSize}
          action={() => {
            pathname.includes("/client")
              ? navigate("/client/login")
              : navigate("/adm/login");
          }}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default Base;
