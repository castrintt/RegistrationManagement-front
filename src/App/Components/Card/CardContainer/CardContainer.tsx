import React from "react";

type CardContainerProps = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerProps) => {
  return <div>{children}</div>;
};

export default CardContainer;
