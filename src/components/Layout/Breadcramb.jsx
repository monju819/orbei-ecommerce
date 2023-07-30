import React, { Fragment } from "react";

import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Breadcramb = ({ title }) => {
  return (
    <div className="my-28">
      <h1 className="  mb-3 font-dm text-5xl font-bold text-primary">
        {title}
      </h1>
      <p className=" font-regular flex items-center gap-x-3 font-dm text-xs text-[#767676]">
        <Link to="/"> Home</Link>
        <FaAngleRight /> {window.location.pathname.split("/")[1]}
      </p>
    </div>
  );
};

export default Breadcramb;
