import Container from "./Container";
import React from "react";
import Flex from "./Flex";
import { Link } from "react-router-dom";
import Image from "./Image";
const Advertise = () => {
  return (
    <div className=" mt-5 md:mt-36">
      <Container>
        <Flex className="flex gap-5 md:gap-x-10  ">
          <div className="w-2/4">
            <Link to="#">
              <Image imgsrc="assets/Ad_1.png" />
            </Link>
          </div>
          <div className="w-2/4">
            <Link to="#">
              <Image imgsrc="assets/Ad_2.png" />
            </Link>
            <Link to="#" className=" mt-2 inline-block md:mt-10">
              <Image imgsrc="assets/Ad_2.png" />
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Advertise;
