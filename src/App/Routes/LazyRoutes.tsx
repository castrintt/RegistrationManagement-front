import { lazy } from "react";

const Unauthorize = lazy(() => import("@commonPages/Unauthorize/Unauthorize"));
const NotFound = lazy(() => import("@commonPages/NotFound/NotFound"));

const Client = {
  Register: lazy(() => import("@clientPages/Register/Register")),
  Login: lazy(() => import("@clientPages/Login/Login")),
  MainClient: lazy(
    () => import("@clientPages/MainClientContainer/MainClientContainer")
  ),
};

export { Unauthorize, NotFound, Client };
