import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArray } from "./utils/routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import store from "./store";

function App() {
  const router = createBrowserRouter(routesArray);

  return (
    <React.Fragment>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer theme="dark" />
      </Provider>
    </React.Fragment>
  );
}

export default App;
