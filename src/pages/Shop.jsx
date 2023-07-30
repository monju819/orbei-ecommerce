import Breadcramb from "../components/Layout/Breadcramb";
import Container from "../components/Layout/Container";
import React, { useState, useEffect } from "react";
import Flex from "../components/Layout/Flex";
import Pagination from "../components/Layout/Pagination";
import LeftSidebar from "../components/Layout/LeftSidebar";
import { BsFillFilterCircleFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
const Shop = () => {
  let [showNumber, setShowNumber] = useState(12);
  let [show, setShow] = useState(true);
  let handlePagination = (e) => {
    setShowNumber(+e.target.value);
  };

  useEffect(() => {
    function scrollWidth(e) {
      if (window.innerWidth < 1024) {
        setShow(false);
      } else {
        setShow(true);
      }
    }
    scrollWidth();
    window.addEventListener("resize", scrollWidth);
  }, []);
  return (
    <Container>
      <Breadcramb title="Product" />
      <Flex className=" relative flex gap-x-10">
        {show && (
          <div className=" absolute left-0 top-0 z-50 w-full bg-[#fcfcfc]  p-5 sm:static sm:w-[25%]  sm:bg-transparent ">
            <AiFillCloseCircle
              className="mb-2 text-xl text-primary"
              onClick={() => setShow(!show)}
            />
            <LeftSidebar />{" "}
          </div>
        )}
        <div className="relative w-full md:w-[75%]">
          <div className="mb-14 flex flex-wrap  gap-y-2 md:justify-end md:gap-x-10">
            <div className="mb-3.5  flex  gap-x-3.5">
              <div className="mb-4  flex items-center">
                <BsFillFilterCircleFill
                  onClick={() => setShow(!show)}
                  className="inline-block text-xl text-[#767676] md:hidden"
                />
              </div>
              <span className=" inline-block font-dm text-base font-bold text-[#767676] ">
                {" "}
                Sort by:{" "}
              </span>
              <select
                id="countries"
                class="font-regular block rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-base font-bold text-[#767676] md:w-[239px]  "
              >
                <option selected>Featured</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="flex items-center gap-x-3.5">
              <span className=" inline-block font-dm text-base font-bold text-[#767676] ">
                Show:
              </span>
              <select
                onChange={handlePagination}
                class="font-regular block rounded-lg border border-[#F0F0F0] p-2.5 font-dm text-base font-bold text-[#767676] md:w-[139px]  "
              >
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="48">48</option>
              </select>
            </div>
          </div>
          <Pagination itemsPerPage={showNumber} />
        </div>
      </Flex>
    </Container>
  );
};

export default Shop;
