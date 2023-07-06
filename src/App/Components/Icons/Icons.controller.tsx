import styles from "./Icons.module.css";
import { Colors } from "./Icons.types";

type Props = {
  color: Colors;
  size: string;
  isActive: boolean;
};

const UseIconController = ({ color, size, isActive }: Props) => {
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
  return {
    Actions: {
      colorCheck: colorCheckStyle,
      classNameCheck,
    },
  };
};

export default UseIconController;
