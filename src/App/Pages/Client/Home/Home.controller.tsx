import { useState } from "react";


const UseHomeController = () => {
  const [activeStep, setActiveStep] = useState("personalData");

  const verifyIfIsActive = (step: string): boolean => {
    if (step === activeStep) {
      return true;
    }
    return false;
  };

  const stepButtonProperties = [
    {
      action: () => setActiveStep("personalData"),
      text: "dados pessoais",
      active: verifyIfIsActive("personalData"),
    },
    {
      action: () => setActiveStep("address"),
      text: "endereço",
      active: verifyIfIsActive("address"),
    },
  ];

  return {
    States: {
      stepProperties: stepButtonProperties,
    },
  };
};

export default UseHomeController;
