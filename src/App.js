import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesArray } from "./utils/routes";

function App() {
  const router = createBrowserRouter(routesArray);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
