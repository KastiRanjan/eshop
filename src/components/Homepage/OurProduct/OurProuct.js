import React, { useContext } from "react";
import Slider from "react-slick";
import banner from "../../../img/banner14.jpg";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import { GlobalContext } from "../../../context/Provider";
import Card from "../../common/Card/Card";

import getProductDetail from "../../../context/actions/product/getProductDetail";
const OurProduct = (props) => {
  const { cartDispatch: dispatch, productState, productDetailDispatch } = useContext(GlobalContext);
  const { loading } = productState;
  const ourProduct = productState.products.mostPopular;
  // const { error } = productState;
  const addToBasket = (product) => {
    console.log(product);
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
  };

  const getSingleProduct = (product) => {
    getProductDetail(product.id)(productDetailDispatch);
    props.history.push(`/product/${product.id}`);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: true,
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
        <div className="ourProduct__title">
          <h2 className="title">Our Product</h2>
        </div>
        <div className="ourProduct__grid">
          <Slider {...settings}>
            {ourProduct !== undefined &&
              ourProduct.map((product) => {
                const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
                return (
                  <Card
                    key={product.id}
                    name={product.name}
                    img={imageURL}
                    price={product.price}
                    discount={product.discount}
                    rating={product.averageRating}
                    view={
                      <>
                        <button
                          className="card__quickView main-btn  flex flex-ai-c fex-jc-c"
                          onClick={() => getSingleProduct(product)}
                        >
                          <FaSearchPlus />
                          Quick View
                        </button>
                      </>
                    }
                    button={
                      <>
                        <button className="card__favourite main-btn icon-btn">
                          <FaHeart />
                        </button>
                        &nbsp;
                        <button className="card__exchange main-btn icon-btn">
                          <FaExchangeAlt />
                        </button>
                        &nbsp;
                        <button
                          className="card__addToCart primary-btn"
                          onClick={() => addToBasket(product)}
                        >
                          <FaShoppingCart />
                          Add to Cart
                        </button>
                      </>
                    }
                  />
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OurProduct);
