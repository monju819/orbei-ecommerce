import React, { Fragment, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import LeftsidebarItem from "./LeftsidebarItem";
const SidebarContent = ({ dropDown, droptitle, data }) => {
  let [drop, setDrop] = useState(dropDown);
  let [show, setShow] = useState(dropDown);

  return (
    <div className="mb-14">
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="mb-9 flex cursor-pointer items-center justify-between"
        >
          <h3 className="font-dm text-xl font-bold text-primary">
            {droptitle}
          </h3>
          <GoTriangleDown />
        </div>
      ) : (
        <h3 className="mb-9 font-dm text-xl font-bold text-primary">
          {droptitle}
        </h3>
      )}

      {show && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <>
                <LeftsidebarItem
                  subdropdown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                        {sitem.name}
                      </h1>
                    ))}
                </LeftsidebarItem>
              </>
            ) : (
              <LeftsidebarItem
                subdropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.name}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftsidebarItem>
            ),
          )}
        </>
      )}
      {!drop && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <>
                <LeftsidebarItem
                  subdropdown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                        {sitem.name}
                      </h1>
                    ))}
                </LeftsidebarItem>
              </>
            ) : (
              <LeftsidebarItem
                subdropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.name}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftsidebarItem>
            ),
          )}
        </>
      )}
    </div>
  );
};

export default SidebarContent;
