/* eslint-disable @typescript-eslint/ban-types */
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegAddressCard, FaStackExchange } from "react-icons/fa";
import { FiEdit, FiFilter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDocumentVerified, GrGroup, GrKey } from "react-icons/gr";
import { HiOutlineExclamation, HiOutlineUser } from "react-icons/hi";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
import { MdOutlineDragHandle, MdPendingActions } from "react-icons/md";
import { RiCloseCircleFill, RiEyeCloseLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiAdguard } from "react-icons/si";
import { SlLogout } from "react-icons/sl";
import styles from "./Icons.module.css";

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
  | "configTerms"
  | "address";

export type IconsProps = {
  icon: IconName;
  color: Colors;
  size: string;
  action: Function;
  isActive: boolean;
};

const Icons = ({ icon, color, size, action, isActive }: IconsProps) => {
  const allColors = {
    red: "#D22929",
    green: "#62C132",
    purple: "#793DC7",
    orange: "#DBA000",
    lightBlue: "#3DBAC7",
    darkBlue: "#00388A",
    white: "white",
    disabled: "#BBBBBB",
  };

  const colorCheckStyle = () => {
    if (isActive) {
      return {
        color: allColors.lightBlue,
        fontSize: size,
      };
    }
    return {
      color: allColors[color],
      fontSize: size,
    };
  };

  const classNameCheck = () => {
    if (color === "white" || color === "darkBlue") {
      return styles.hover_action;
    }
    return "";
  };

  const selectedIcon = {
    pending: (
      <MdPendingActions
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    home: (
      <AiOutlineHome
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    user: (
      <AiOutlineUser
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    dashboard: (
      <RxDashboard
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    logout: (
      <SlLogout
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    hamburger: (
      <GiHamburgerMenu
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    notification: (
      <IoIosNotificationsOutline
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    terms: (
      <SiAdguard
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    filter: (
      <FiFilter
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    inService: (
      <HiOutlineChatBubbleLeftEllipsis
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    exclamation: (
      <HiOutlineExclamation
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    warning: (
      <IoWarningOutline
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    closed: (
      <RiCloseCircleFill
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    cutEye: (
      <AiOutlineEyeInvisible
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    openEye: (
      <AiOutlineEye
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    closedEye: (
      <RiEyeCloseLine
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    configuration: (
      <HiOutlineCog8Tooth
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    key: (
      <GrKey
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    group: (
      <GrGroup
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    admUser: (
      <HiOutlineUser
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    search: (
      <AiOutlineSearch
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    add: (
      <BiAddToQueue
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    edit: (
      <FiEdit
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    trash: (
      <BsFillTrash3Fill
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    drag: (
      <MdOutlineDragHandle
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    aproveDocument: (
      <GrDocumentVerified
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    configTerms: (
      <FaStackExchange
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
    address: (
      <FaRegAddressCard
        style={colorCheckStyle()}
        className={classNameCheck()}
        onClick={() => action()}
      />
    ),
  };

  return <>{selectedIcon[icon]}</>;
};

export default Icons;
