import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
const LeftsidebarItem = (props) => {
  let [drop, setDrop] = useState(props.subDropdown);
  let [show, setShow] = useState(false);

  return (
    <div>
      {drop ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b border-solid border-[#D8D8D8] py-5"
        >
          <h3 className="  cursor-ponter font-regular  font-dm text-base text-[#767676]  ">
            {props.color && (
              <span
                className="mr-2 inline-block h-[11px]  w-[11px]  rounded-full  "
                style={{ background: props.color }}
              ></span>
            )}
            {props.title}
          </h3>
          <AiOutlinePlus className="text-xs text-[#767676]" />
        </div>
      ) : (
        <h3 className="  cursor-ponter font-regular border-b border-solid border-[#D8D8D8] py-5 font-dm text-base text-[#767676]">
          {props.color && (
            <span
              className="mr-2 inline-block h-[11px]  w-[11px]  rounded-full  "
              style={{ background: props.color }}
            ></span>
          )}
          {props.title}
        </h3>
      )}

      {show && <div>{props.children}</div>}
    </div>
  );
};

export default LeftsidebarItem;
