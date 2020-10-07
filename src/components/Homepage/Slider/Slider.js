import React, { useContext } from "react";
import Slide from "react-slick";
import { GlobalContext } from "../../../context/Provider";
import banner1 from "../../../img/banner01.jpg";
import banner2 from "../../../img/banner02.jpg";
import banner3 from "../../../img/banner03.jpg";

export default function Slider() {
  const { productState } = useContext(GlobalContext);
  const offers = productState.offers;
  console.log(offers);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider flex">
      <div className="container ">
        <Slide {...settings}>
          {offers.map((offer) => {
            const imageUrl = `https://laxmipujapasal.tk/Offers/${offer.imageUrl}`;
            return (
              <div className="banner">
                <img src={imageUrl} alt="" />
                <div className="caption">
                  <h1>
                    HOT DEAL <br /> <span> Up to {offer.discount} off</span>
                  </h1>
                  <button className="primary-btn">Shop Now</button>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </div>
  );
}
