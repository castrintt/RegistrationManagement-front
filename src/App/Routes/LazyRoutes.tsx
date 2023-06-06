import { lazy } from "react";

const Register = lazy(() => import("../Pages/Client/Register/Register"));
const LoginClient = lazy(() => import("../Pages/Client/Login/Login"));
const Unauthorize = lazy(
  () => import("../Pages/Common/Unauthorize/Unauthorize")
);
const NotFound = lazy(() => import('../Pages/Common/NotFound/NotFound'))

export { Register, Unauthorize, LoginClient, NotFound };
