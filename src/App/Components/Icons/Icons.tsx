/* eslint-disable @typescript-eslint/ban-types */
import TooltipComponent from "../Tooltip/Tooltip";
import UseIconController from "./Icons.controller";
import { DefaultIcons } from "./Icons.imports";
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
          <DefaultIcons.MdPendingActions
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
          <DefaultIcons.AiOutlineHome
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
          <DefaultIcons.AiOutlineUser
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
          <DefaultIcons.RxDashboard
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
          <DefaultIcons.SlLogout
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
          <DefaultIcons.GiHamburgerMenu
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
          <DefaultIcons.IoIosNotificationsOutline
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
          <DefaultIcons.SiAdguard
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
          <DefaultIcons.FiFilter
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
          <DefaultIcons.HiOutlineChatBubbleLeftEllipsis
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
          <DefaultIcons.HiOutlineExclamation
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
          <DefaultIcons.IoWarningOutline
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
          <DefaultIcons.RiCloseCircleFill
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
          <DefaultIcons.AiOutlineEyeInvisible
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
          <DefaultIcons.AiOutlineEye
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
          <DefaultIcons.RiEyeCloseLine
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
          <DefaultIcons.HiOutlineCog8Tooth
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
          <DefaultIcons.IoKeyOutline
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
          <DefaultIcons.GrGroup
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
          <DefaultIcons.HiOutlineUser
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
          <DefaultIcons.AiOutlineSearch
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
          <DefaultIcons.BiAddToQueue
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
          <DefaultIcons.FiEdit
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
          <DefaultIcons.BsFillTrash3Fill
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
          <DefaultIcons.MdOutlineDragHandle
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
          <DefaultIcons.GrDocumentVerified
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
          <DefaultIcons.FaStackExchange
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
          <DefaultIcons.FaRegAddressCard
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
          <DefaultIcons.IoDocumentsOutline
            data-cy={`icons-${icon}`}
            style={Actions.colorCheck()}
            className={Actions.classNameCheck()}
            onClick={() => action()}
          />
        }
      />
    ),
    newsLetter: (
      <TooltipComponent
        title={tooltip.title}
        position={tooltip.position}
        children={
          <DefaultIcons.ImNewspaper
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
