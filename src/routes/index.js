import React from "react";
import App from "../App";
import Test from "../test/Test";

const routes = [
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/test",
    element: <Test></Test>
  }
];

export default routes;
