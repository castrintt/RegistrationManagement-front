import User from "@clientPages/User/User";
import Home from "@clientPages/Home/Home";
import Notifications from "@clientPages/Notifications/Notifications";
import Documents from "@clientPages/Documents/Documents";

export const Paths = {
  Client: [
    {
      path: "/client/home",
      component: <Home />,
    },
    {
      path: "/client/user",
      component: <User />,
    },
    {
      path: "/client/user/:id",
      component: <User />,
    },
    {
      path: "/client/user/address",
      component: <User />,
    },
    {
      path: "/client/user/address/:id",
      component: <User />,
    },
    {
      path: "/client/notifications",
      component: <Notifications />,
    },
    {
      path: "/client/documents",
      component: <Documents />,
    },
  ],
};
