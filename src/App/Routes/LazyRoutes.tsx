import { lazy } from "react";

const Unauthorize = lazy(() => import("@commonPages/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@commonPages/NotFound/NotFound"));

const Client = {
  Register: lazy(() => import("@clientPages/Register/Register")),
  Login: lazy(() => import("@clientPages/Login/Login")),
  Home: lazy(() => import("@clientPages/Home/Home")),
  User: lazy(() => import("@clientPages/User/User")),
  Documents: lazy(() => import("@clientPages/Documents/Documents")),
  Application: lazy(() => import("@clientPages/Application/Application")),
};

export { Unauthorize, NotFound, Client };
