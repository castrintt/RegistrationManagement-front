import { lazy } from "react";

const Unauthorize = lazy(
  () => import("../Pages/Common/Unauthorize/Unauthorize")
);
const NotFound = lazy(() => import("../Pages/Common/NotFound/NotFound"));

const Client = {
  Register: lazy(() => import("../Pages/Client/Register/Register")),
  Login: lazy(() => import("../Pages/Client/Login/Login")),
  Home: lazy(() => import("../Pages/Client/Home/Home")),
  User: lazy(() => import("../Pages/Client/User/User")),
  Application: lazy(() => import("../Pages/Client/Application/Application")),
};

export { Unauthorize, NotFound, Client };
