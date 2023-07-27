import React, { Fragment } from "react";
import Banner from "../components/Layout/Banner";
import Advertise from "../components/Layout/Advertise";
import Newarrivals from "../components/Layout/Newarrivals";
import Bestsellers from "../components/Layout/Bestsellers";
import MiddleAdvertise from "../components/Layout/MiddleAdvertise";
import Offers from "../components/Layout/Offers";
const Home = () => {
  return (
    <Fragment>
      <Banner />
      <Advertise />
      <Newarrivals />
      <Bestsellers />
      <MiddleAdvertise />
      <Offers />
    </Fragment>
  );
};

export default Home;
