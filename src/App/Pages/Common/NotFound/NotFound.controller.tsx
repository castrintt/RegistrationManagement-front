import { useNavigate } from "react-router-dom";

export const UseNotFoundController = () => {
  const navigate = useNavigate();

  return {
    Actions: {
      onNavigate: navigate,
    },
  };
};
