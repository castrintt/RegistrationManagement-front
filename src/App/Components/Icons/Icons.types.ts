import { EIconColor } from '@enums/EIconColor';
import { EIconName } from '@enums/EIconName';


export type IconsProps = {
  icon: EIconName;
  color: EIconColor;
  size: string;
  action: () => void;
  isActive: boolean;
  tooltip: {
    title: string;
    position: "left" | "right" | "top" | "bottom";
  };
};
