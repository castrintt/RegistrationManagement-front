import { lazy } from "react";

const Register = lazy(() => import("../Pages/Client/Register/Register"));
const LoginClient = lazy(() => import("../Pages/Client/Login/Login"));
const Unauthorize = lazy(
  () => import("../Pages/Common/Unauthorize/Unauthorize")
);

export { Register, Unauthorize, LoginClient };
