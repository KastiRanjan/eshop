import React from "react";
import Slide from "react-slick";
import banner1 from "../../../img/banner01.jpg";
import banner2 from "../../../img/banner02.jpg";
import banner3 from "../../../img/banner03.jpg";

export default function Slider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider flex">
      <div className="container ">
        <Slide {...settings}>
          <div>
            <img src={banner1} alt="" />
          </div>
          <div>
            <img src={banner2} alt="" />
          </div>
          <div>
            <img src={banner3} alt="" />
          </div>
        </Slide>
      </div>
    </div>
  );
}
