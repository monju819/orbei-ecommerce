import React, { Fragment } from "react";
import Navbar from "./navbar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default RootLayout;
