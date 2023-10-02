import React from "react";
import App from "../App";
import Test from "../test/Test";
import Error from "../views/error/Error";

const routes = [
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error/>,
  },
  {
    path: "/test",
    element: <Test></Test>,
  },
];

export default routes;
