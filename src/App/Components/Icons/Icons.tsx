/* eslint-disable @typescript-eslint/ban-types */
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import {
  IoWarningOutline,
  IoKeyOutline,
  IoDocumentsOutline,
} from "react-icons/io5";
import {
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCog8Tooth,
} from "react-icons/hi2";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FaRegAddressCard, FaStackExchange } from "react-icons/fa";
import { FiEdit, FiFilter } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrDocumentVerified, GrGroup } from "react-icons/gr";
import { HiOutlineExclamation, HiOutlineUser } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineDragHandle, MdPendingActions } from "react-icons/md";
import { RiCloseCircleFill, RiEyeCloseLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { SiAdguard } from "react-icons/si";
import { SlLogout } from "react-icons/sl";
import TooltipComponent from "../Tooltip/Tooltip";
import UseIconController from "./Icons.controller";
import { IconsProps } from "./Icons.types";

const Icons = ({
  icon,
  color,
  size,
  action,
  isActive,
  tooltip,
}: IconsProps) => {
  const controllerProps = {
    color,
    size,
    isActive,
  };
  const { Actions } = UseIconController(controllerProps);

  const selectedIcon = {
    pending: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <MdPendingActions
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    home: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <AiOutlineHome
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    user: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <AiOutlineUser
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    dashboard: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <RxDashboard
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    logout: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <SlLogout
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    hamburger: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <GiHamburgerMenu
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    notification: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <IoIosNotificationsOutline
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    terms: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <SiAdguard
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    filter: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <FiFilter
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    inService: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <HiOutlineChatBubbleLeftEllipsis
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    exclamation: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <HiOutlineExclamation
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    warning: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <IoWarningOutline
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    closed: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <RiCloseCircleFill
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    cutEye: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <AiOutlineEyeInvisible
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    openEye: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <AiOutlineEye
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    closedEye: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <RiEyeCloseLine
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    configuration: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <HiOutlineCog8Tooth
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    key: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <IoKeyOutline
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    group: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <GrGroup
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    admUser: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <HiOutlineUser
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    search: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <AiOutlineSearch
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    add: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <BiAddToQueue
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    edit: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <FiEdit
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    trash: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <BsFillTrash3Fill
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    drag: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <MdOutlineDragHandle
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    aproveDocument: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <GrDocumentVerified
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    configTerms: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <FaStackExchange
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    address: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <FaRegAddressCard
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    documents: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <IoDocumentsOutline
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
  };

  return <>{selectedIcon[icon]}</>;
};

export default Icons;
