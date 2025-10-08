import { createBrowserRouter } from "react-router";
import Root from "../layout/Root/Root";
import Loder from "../component/Loder/Loder";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installatioin/Installation";
import Error from "../pages/404/404";
import axios from "axios";

const router = createBrowserRouter([

  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: async () => {
          return (await axios('./apps-data.json')).data
        },
        Component: Home
      },
      {
        path: 'apps',
        Component: Apps
      },
      {
        path: 'installation',
        Component: Installation
      },

      {
        path: '/*',
        Component: Error
      }

    ]

  }
])

export { router }