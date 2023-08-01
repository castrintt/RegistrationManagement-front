import styles from "./StepButton.module.css";

type StepButtonProps = {
  action: () => void;
  text: string;
  active: boolean;
};

const UseStepButtonController = ({ action, text, active }: StepButtonProps) => {
  const renderStyle = () => {
    if (active) {
      return styles.active_button;
    }
    return styles.deactive_button;
  };

  return {
    Actions: {
      onRenderStyle: renderStyle(),
      onClick:action
    },
    States: {
      action,
      description:text,
    },
  };
};

export default UseStepButtonController;
