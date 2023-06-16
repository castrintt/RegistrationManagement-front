import React from "react";
import { MdPendingActions } from "react-icons/md";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineSearch,
} from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { SlLogout } from "react-icons/sl";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiFilter } from "react-icons/fi";
import { SiAdguard } from "react-icons/si";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import { HiOutlineExclamation, HiOutlineUser } from "react-icons/hi";
import { IoWarningOutline } from "react-icons/io5";
import { RiCloseCircleFill, RiEyeCloseLine } from "react-icons/ri";
import { GrKey, GrGroup, GrDocumentVerified } from "react-icons/gr";
import { BiAddToQueue } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { MdOutlineDragHandle } from "react-icons/md";
import { FaStackExchange, FaRegAddressCard } from "react-icons/fa";

type Colors =
  | "red"
  | "green"
  | "purple"
  | "orange"
  | "lightBlue"
  | "white"
  | "disabled";

type IconName =
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

type Props = {
  icon: IconName;
  color: Colors;
  size: string;
};

const Icons = ({ icon, color, size }: Props) => {
  const allColors = {
    red: "#D22929",
    green: "#62C132",
    purple: "#793DC7",
    orange: "#DBA000",
    lightBlue: "#3DBAC7",
    white: "white",
    disabled: "#BBBBBB",
  };

  const selectedIcon = {
    pending: (
      <MdPendingActions style={{ color: allColors[color], fontSize: size }} />
    ),
    home: <AiOutlineHome style={{ color: allColors[color], fontSize: size }} />,
    user: <AiOutlineUser style={{ color: allColors[color], fontSize: size }} />,
    dashboard: (
      <RxDashboard style={{ color: allColors[color], fontSize: size }} />
    ),
    logout: <SlLogout style={{ color: allColors[color], fontSize: size }} />,
    hamburger: (
      <GiHamburgerMenu style={{ color: allColors[color], fontSize: size }} />
    ),
    notification: (
      <IoIosNotificationsOutline
        style={{ color: allColors[color], fontSize: size }}
      />
    ),
    terms: <SiAdguard style={{ color: allColors[color], fontSize: size }} />,
    filter: <FiFilter style={{ color: allColors[color], fontSize: size }} />,
    inService: (
      <HiOutlineChatBubbleLeftEllipsis
        style={{ color: allColors[color], fontSize: size }}
      />
    ),
    exclamation: (
      <HiOutlineExclamation
        style={{ color: allColors[color], fontSize: size }}
      />
    ),
    warning: (
      <IoWarningOutline style={{ color: allColors[color], fontSize: size }} />
    ),
    closed: (
      <RiCloseCircleFill style={{ color: allColors[color], fontSize: size }} />
    ),
    cutEye: (
      <AiOutlineEyeInvisible
        style={{ color: allColors[color], fontSize: size }}
      />
    ),
    openEye: (
      <AiOutlineEye style={{ color: allColors[color], fontSize: size }} />
    ),
    closedEye: (
      <RiEyeCloseLine style={{ color: allColors[color], fontSize: size }} />
    ),
    configuration: (
      <HiOutlineCog8Tooth style={{ color: allColors[color], fontSize: size }} />
    ),
    key: <GrKey style={{ color: allColors[color], fontSize: size }} />,
    group: <GrGroup style={{ color: allColors[color], fontSize: size }} />,
    admUser: (
      <HiOutlineUser style={{ color: allColors[color], fontSize: size }} />
    ),
    search: (
      <AiOutlineSearch style={{ color: allColors[color], fontSize: size }} />
    ),
    add: <BiAddToQueue style={{ color: allColors[color], fontSize: size }} />,
    edit: <FiEdit style={{ color: allColors[color], fontSize: size }} />,
    trash: (
      <BsFillTrash3Fill style={{ color: allColors[color], fontSize: size }} />
    ),
    drag: (
      <MdOutlineDragHandle
        style={{ color: allColors[color], fontSize: size }}
      />
    ),
    aproveDocument: (
      <GrDocumentVerified style={{ color: allColors[color], fontSize: size }} />
    ),
    configTerms: (
      <FaStackExchange style={{ color: allColors[color], fontSize: size }} />
    ),
    address: (
      <FaRegAddressCard style={{ color: allColors[color], fontSize: size }} />
    ),
  };

  return <>{selectedIcon[icon]}</>;
};

export default Icons;
