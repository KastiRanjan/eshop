import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import banner from "../../../img/banner14.jpg";

import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";

import { Redirect, withRouter } from "react-router";
import { GlobalContext } from "../../../context/Provider";
import Card from "../../common/Card/Card";
import getProduct from "../../../context/actions/product/getProduct";
import getProductDetail from "../../../context/actions/product/getProductDetail";
const OurProduct = (props) => {
  const { cartDispatch: dispatch, productState, productDetailDispatch } = useContext(GlobalContext);
  const ourProduct = productState.products.mostPopular;
  const { error } = productState;
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
    slidesToShow: 3,
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
        breakpoint: 992,
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
          <div className="ourProduct__item">
            <img src={banner} alt="" style={{ width: "100%" }} />
          </div>
          <div className="ourProduct__item">
            <Slider {...settings}>
              {ourProduct !== undefined &&
                ourProduct.map((product) => {
                  return (
                    <Card
                      key={product.id}
                      name={product.name}
                      img="https://colorlib.com/etc/e-shop/img/product06.jpg"
                      price={product.price}
                      discount={product.discount}
                      rating={product.averageRating}
                      view={
                        <>
                          <button
                            className="card__quickView flex flex-ai-c fex-jc-c"
                            onClick={() => getSingleProduct(product)}
                          >
                            <FaSearchPlus />
                            Quick View
                          </button>
                        </>
                      }
                      button={
                        <>
                          <button className="favou card__iconBtn">
                            <FaHeart />
                          </button>
                          <button className="card__exchange card__iconBtn">
                            <FaExchangeAlt />
                          </button>
                          <button className="card__addToCart" onClick={() => addToBasket(product)}>
                            <FaShoppingCart />
                            Add to Cart
                          </button>
                        </>
                      }
                    />
                  );
                })}
            </Slider>
            {error}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(OurProduct);
