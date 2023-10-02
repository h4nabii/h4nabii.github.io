import React from "react";
import Test from "../test/Test";
import Logs from "../views/logs/Logs";
import Error from "../views/error/Error";

const routes = [
  {
    path: "/",
    label: "文章",
    element: <Logs></Logs>,
    errorElement: <Error/>,
  },
  {
    path: "/about",
    label: "关于",
    element: <Test></Test>,
  },
  {
    path: "/test",
    label: "测试",
    element: <Test></Test>,
    hideInMenu: true,
  },
];

export default routes;
