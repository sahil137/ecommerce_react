import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArray } from "./utils/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const router = createBrowserRouter(routesArray);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" />
    </React.Fragment>
  );
}

export default App;
