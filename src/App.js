import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

//Components

import Home from "./pages/Home/Home";
import ChartPage, { loader as dataLoader } from "./pages/ChartPage/ChartPage";
import Error from "./components/Error/Error";

const router = createBrowserRouter([
  {
    element: <Home />,
    path: "/",
  },
  {
    element: <ChartPage />,
    path: "/data/:id",
    loader: dataLoader,
    errorElement: <Error err="Something went wrong" />,
  },
  {
    element: <Error err="This page doesn't exist" />,
    path: "*",
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
