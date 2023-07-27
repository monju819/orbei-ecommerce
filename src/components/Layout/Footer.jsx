import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap justify-between">
          <div className="w-1/3  md:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">MENU</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Home"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="About"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Contact"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Journal1"
                href="#"
              />
            </List>
          </div>
          <div className="w-1/3  md:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">SHOP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 1"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 2"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 3"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 4"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Category 5"
                href="#"
              />
            </List>
          </div>
          <div className="w-1/3  md:w-[10%]">
            <h4 className="mb-4 font-dm text-base font-bold">HELP</h4>
            <List>
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Privacy Policy"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Terms & Conditions"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Special E-shop"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Shipping"
                href="#"
              />
              <ListItem
                className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]"
                item="Secure Payments"
                href="#"
              />
            </List>
          </div>
          <div className="flex w-[60%] md:w-[30%] md:justify-center">
            <div className="mt-2">
              <h4 className="mb-4 font-dm text-base font-bold">
                (052) 611-5711 <br /> company@domain.com
              </h4>
              <p className="font-regular mt-[6px] font-dm text-sm text-[#6D6D6D]">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className=" mt-4  w-full  md:w-[35%]">
            <Image imgsrc="assets/logo.png" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Footer;
