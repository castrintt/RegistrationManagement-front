import { useNavigate } from "react-router-dom";

export const UseUnauthorizeController = () => {
  const navigate = useNavigate();

  return {
    Actions: {
      onNavigate: navigate,
    },
  };
};
