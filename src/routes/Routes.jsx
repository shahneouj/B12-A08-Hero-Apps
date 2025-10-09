import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Loder from "../component/Loder/Loder";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installatioin/Installation";
import Errorpath from "../pages/404/not-found";
import axios from "axios";
import AppDetails from "../pages/AppDetails/AppDetails";

const router = createBrowserRouter([

  {
    path: '/',
    errorElement: <Errorpath></Errorpath>,
    hydrateFallbackElement: <Loder />,
    Component: Root,

    children: [
      {
        index: true,
        loader: () => axios('../apps-data.json').then((dt) => dt.data),
        Component: Home
      },
      {
        path: '/apps',
        loader: () => axios('../apps-data.json').then((dt) => dt.data),
        Component: Apps
      },
      {
        path: '/installation',
        Component: Installation
      },
      {
        path: '/appDetails/:id',
        loader: () => axios('../apps-data.json').then((dt) => dt.data),
        Component: AppDetails
      },
    ]

  }
])

export { router }