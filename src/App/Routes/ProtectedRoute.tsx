import React from "react";
import { Navigate } from "react-router-dom";
import { AuthService } from "@clientService/Auth.service";

type Props = {
  children: JSX.Element;
};

const isAuthenticated = () => {
  const authService = new AuthService();
  return authService.checkAuthentication();
};

const ProtectedRoute = ({ children }: Props) => {
  return isAuthenticated() ? children : <Navigate to="/unauthorize" />;
};

export default ProtectedRoute;
