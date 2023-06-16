/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */
import React from "react";
import styles from "./Base.module.css";
import Icons, { IconsProps } from "../Icons/Icons";
import { useState } from "react";

type Props = {
  sidebarIcons: IconsProps[];
  isOpen: boolean;
};

const Base = ({ sidebarIcons }: Props) => {
  const iconsSize = "4rem";
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openOrCLoseSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? styles.container_open : styles.container_closed}>
      <div className={styles.image_container}></div>
      <div className={styles.main_icons}>
        <Icons
          icon={"home"}
          color={"white"}
          size={iconsSize}
          action={openOrCLoseSideBar}
          isActive={false}
        />
        {sidebarIcons.map((values: IconsProps) => (
          <Icons
            icon={values.icon}
            color={"white"}
            size={iconsSize}
            action={values.action}
            isActive={values.isActive}
          />
        ))}
      </div>
      <div className={styles.logout}>
        <Icons
          icon={"logout"}
          color={"white"}
          size={iconsSize}
          action={() => {}}
          isActive={false}
        />
      </div>
    </div>
  );
};

export default Base;
