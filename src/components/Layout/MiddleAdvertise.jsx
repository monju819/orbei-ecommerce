import React from "react";
import Container from "./Container";
import Image from "./Image";
import { Link } from "react-router-dom";
const MiddleAdvertise = () => {
  return (
    <div className="md:mt-32">
      <Container>
        <Link to="#">
          <Image imgsrc="assets/midle_ad.png" />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertise;
