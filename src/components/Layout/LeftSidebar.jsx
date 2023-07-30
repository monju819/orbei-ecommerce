import React, { Fragment } from "react";
import SidebarContent from "./SidebarContent";
import { category, colors, brands, prices } from "../../data/data";
const LeftSidebar = () => {
  return (
    <Fragment>
      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Category"
        data={category}
      />

      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Color"
        data={colors}
      />

      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Brand"
        data={brands}
      />
      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Price"
        data={prices}
      />
      {/* <SidebarContent
        dropDown={true}
        droptitle=" Shop by Color"
        data={colors}
      />
      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Brand"
        data={brands}
      />
      <SidebarContent
        dropDown={true}
        droptitle=" Shop by Price"
        data={prices}
      /> */}
    </Fragment>
  );
};

export default LeftSidebar;
