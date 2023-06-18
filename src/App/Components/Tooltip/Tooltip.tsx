import React, { ReactNode } from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

export type TooltipComponentProps = {
  title: string;
  position: "top" | "bottom" | "left" | "right";
  children: ReactNode;
};

const TooltipComponent: React.FC<TooltipComponentProps> = ({
  title,
  position,
  children,
}) => (
  <Tooltip title={title} position={position} trigger="mouseenter">
    {children}
  </Tooltip>
);

export default TooltipComponent;
