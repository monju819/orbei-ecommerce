import React from "react";
import Navbar from "./components/Layout/navbar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./pages/Home";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
};

export default App;
