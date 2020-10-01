import React, { useState, useEffect, useContext } from "react";
import Slider from "react-slick";
import banner from "../../img/banner14.jpg";

import Card from "../Card/Card";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart, FaStar } from "react-icons/fa";
import { GlobalContext } from "../../context/Provider";
import getProduct from "../../context/actions/product/getProduct";
export default function Product() {
  const { cartState, cartDispatch: dispatch, productState, productDispatch } = useContext(
    GlobalContext
  );

  const newArrival = productState.products.newArrivals;
  console.log(newArrival);
  useEffect(() => {
    getProduct()(productDispatch);
  }, []);
  const handleQuickView = (data) => {
    console.log(data);
  };
  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        product,
      },
    });
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
    <div className="product">
      {/* <Modal /> */}
      <div className="container ">
        <div className="product__title">
          <h2 className="title">New Arrivals</h2>
        </div>
        <div className="product__grid">
          <div className="product__item">
            <img src={banner} alt="" style={{ width: "100%" }} />
          </div>
          <div className="product__item">
            <Slider {...settings}>
              {newArrival != undefined &&
                newArrival.map((product) => {
                  P;
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
                            // onClick={() => handleQuickView(product)}
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
          </div>
        </div>
      </div>
    </div>
  );
}

const Modal = (product) => {
  return (
    <div className="modal">
      <div className="modal__inner">
        <div className="modal__title">Model Title</div>
        <div className="modal__content">Model Content</div>
      </div>
    </div>
  );
};

// const products = [
//   {
//     id: "1",
//     name: "Mens Casual Premium Slim Fit T-Shirts",
//     img: "https://colorlib.com/etc/e-shop/img/product04.jpg",
//     price: "$32.50",
//     oldPrice: "$45.00",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     rating: <>⭐⭐⭐⭐⭐</>,
//   },
//   {
//     id: "2",
//     name: "Mens Casual Premium Slim Fit T-Shirts",
//     img: "https://colorlib.com/etc/e-shop/img/product05.jpg",
//     price: "$32.50",
//     oldPrice: "$45.00",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     rating: <>⭐⭐⭐⭐⭐</>,
//   },
//   {
//     id: "3",
//     name: "Mens Casual Premium Slim Fit T-Shirts",
//     img: "https://colorlib.com/etc/e-shop/img/product06.jpg",
//     price: "$32.50",
//     oldPrice: "$45.00",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     rating: <>⭐⭐⭐⭐⭐</>,
//   },
//   {
//     id: "4",
//     name: "Mens Casual Premium Slim Fit T-Shirts",
//     img: "https://colorlib.com/etc/e-shop/img/product07.jpg",
//     price: "$32.50",
//     oldPrice: "$45.00",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     rating: <>⭐⭐⭐⭐⭐</>,
//   },
// ];
