import React, { useContext } from "react";
import Slider from "react-slick";
import { withRouter } from "react-router";
import Card from "../../../common/Card/Card";
import { GlobalContext } from "../../../../context/Provider";

const OurProduct = (props) => {
  const { cartDispatch: dispatch, productState } = useContext(GlobalContext);
  const ourProduct = productState.products.mostPopular;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="ourProduct flex">
      <div className="container ">
        <div className="ourProduct__title section-title">
          <h2 className="title">Our Product</h2>
        </div>

        <Slider {...settings}>
          {ourProduct !== undefined &&
            ourProduct.map((product) => {
              const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img={imageURL}
                  price={product.price}
                  discount={product.discount}
                  rating={product.averageRating}
                />
              );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default withRouter(OurProduct);
