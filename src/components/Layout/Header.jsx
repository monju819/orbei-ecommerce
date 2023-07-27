import Container from "./Container";
import React, { useEffect, useRef, useState } from "react";
import Flex from "./Flex";
import Dropdown from "./Dropdown";
import { FaBars, FaSearch, FaUserAlt } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { BsCartFill } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import Image from "./Image";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import { Link } from "react-router-dom";
const Header = () => {
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();
  let [categoryShow, setCategoryShow] = useState(false);
  let [userShow, setUserShow] = useState(false);
  let [cartShow, setCartShow] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      console.log(e.target);
      if (categoryRef.current.contains(e.target)) {
        setCategoryShow(true);
      } else {
        setCategoryShow(false);
      }
      if (userRef.current.contains(e.target)) {
        setUserShow(true);
      } else {
        setUserShow(false);
      }
      if (cartRef.current.contains(e.target)) {
        setCartShow(true);
      } else {
        setCartShow(false);
      }
    });
  }, []);

  return (
    <div className="  bg-[#F5F5F3] py-6 ">
      <Container>
        <Flex className="flex justify-between  ">
          <div className="flex items-center">
            <Dropdown className="relative" dropref={categoryRef}>
              <p className="flex items-center gap-x-2.5">
                <FaBars />{" "}
                <span className="hidden lg:inline-block">Shop by Category</span>
              </p>
              {categoryShow && (
                <List className="absolute top-8 w-[263px] bg-primary text-[#ffffff70]">
                  <ListItem
                    className="font-regular border  border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Accesories"
                  />
                  <ListItem
                    className="font-regular border border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Furniture"
                  />
                  <ListItem
                    className="font-regular border border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Electronics"
                  />
                  <ListItem
                    className="font-regular border border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Clothes"
                  />
                  <ListItem
                    className="font-regular border border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Bags"
                  />
                  <ListItem
                    className="font-regular border border-solid border-[#2D2D2D] px-5 py-4 font-dm duration-300 ease-in-out hover:px-8 hover:text-white"
                    item="Home appliances"
                  />
                </List>
              )}
            </Dropdown>
          </div>
          <div className="relative w-auto lg:w-[601px]">
            <Search
              className="w-full px-5 py-4 placeholder:text-[#C4C4C4] "
              placeholder=" Search Products"
            />
            <FaSearch className="absolute right-4 top-5" />
          </div>
          <div className="flex items-center justify-center">
            <Flex className="flex  gap-x-10">
              <Dropdown className="relative" dropref={userRef}>
                <div className="flex items-center ">
                  <FaUserAlt />
                  <GoTriangleDown />
                </div>
                {userShow && (
                  <List className="absolute right-0 top-8  w-[200px] border border-solid border-[#F0F0F0] bg-white text-center text-primary">
                    <ListItem
                      className="font-regular border-b  border-solid border-[#F0F0F0] px-5 py-4 font-dm duration-300 ease-in-out hover:bg-primary  hover:text-white"
                      item="My Account"
                    />
                    <ListItem
                      className="font-regular border-b border-solid border-[#F0F0F0] px-5 py-4 font-dm duration-300 ease-in-out hover:bg-primary  hover:text-white"
                      item="Log Out"
                    />
                  </List>
                )}
              </Dropdown>

              <div>
                <Dropdown className="relative" dropref={cartRef}>
                  <div className="flex items-center ">
                    <BsCartFill className="text-xl " />
                  </div>
                  {cartShow && (
                    <div className="absolute right-0 top-8 w-[360px] border border-solid border-[#F0F0F0]">
                      <div className="bg-[#F5F5F3] p-5">
                        <Flex className="flex justify-between ">
                          <div>
                            <Image imgsrc="assets/cartimg.png" />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="font-dm text-sm font-bold text-primary ">
                              Black Smart Watch
                            </h3>
                            <p className=" mt-3  font-dm text-sm font-bold text-primary ">
                              $44.00
                            </p>
                          </div>
                          <div className="flex items-center justify-end">
                            <ImCross className="text-sm" />
                          </div>
                        </Flex>
                      </div>
                      <div className="bg-white p-5">
                        <h4 className="font-regular font-dm text-base text-[#767676]">
                          Subtotal:{" "}
                          <span className="font-bold text-primary">$44.00</span>{" "}
                        </h4>
                        <Link
                          className=" mr-5 mt-3 inline-block border border-solid border-[#2B2B2B] px-10 py-4 text-sm font-bold  text-primary duration-300 hover:bg-primary hover:text-white hover:ease-in"
                          to="#"
                        >
                          View Cart
                        </Link>
                        <Link
                          className=" mt-3 inline-block border border-solid border-[#2B2B2B] px-10 py-4 text-sm font-bold text-primary  duration-300 hover:bg-primary hover:text-white hover:ease-in  "
                          to="#"
                        >
                          Checkout
                        </Link>
                      </div>
                    </div>
                  )}
                </Dropdown>
              </div>
            </Flex>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
