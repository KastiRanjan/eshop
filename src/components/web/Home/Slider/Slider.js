import React, { useContext } from "react";
import Slide from "react-slick";
import { GlobalContext } from "../../../../context/Provider";

export default function Slider() {
  const { productState } = useContext(GlobalContext);
  const offers = productState.offers;
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
              <div className="slider__banner" key={offer.id}>
                <img className="slider__bannerImg" src={imageUrl} alt="" />
                <div className="slider__bannerCaption">
                  <h1>
                    {offer.name} <br /> <span> Up to {offer.discount} off</span>
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
