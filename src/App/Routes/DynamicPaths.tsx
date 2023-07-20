import User from "@clientPages/User/User";
import Home from "@clientPages/Home/Home";
import Notifications from "@clientPages/Notifications/Notifications";
import Documents from "@clientPages/Documents/Documents";
import NewsLetter from "@clientPages/NewsLetter/NewsLetter";

export const Paths = {
  Client: [
    {
      name:'Home',
      path: "/client/home",
      component: <Home />,
    },
    {
      name:'Minha conta',
      path: "/client/user",
      component: <User />,
    },
    {
      name:'Minha conta',
      path: "/client/user/:id",
      component: <User />,
    },
    {
      name:'Minha conta',
      path: "/client/user/address",
      component: <User />,
    },
    {
      name:'Minha conta',
      path: "/client/user/address/:id",
      component: <User />,
    },
    {
      name:'Notificações',
      path: "/client/notifications",
      component: <Notifications />,
    },
    {
      name:'Documentos',
      path: "/client/documents",
      component: <Documents />,
    },
    {
      name:'NewsLetter',
      path: "/client/news-letter",
      component: <NewsLetter />,
    },
  ],
};
