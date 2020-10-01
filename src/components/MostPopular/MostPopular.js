import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import banner from "../../img/banner14.jpg";
import Card from "../common/Card/Card";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { GlobalContext } from "../../context/Provider";
import getProduct from "../../context/actions/product/getProduct";
import { withRouter } from "react-router";
const MostPopular = (props) => {
  const {
    cartDispatch: dispatch,
    productState,
    productDispatch,
    singleProductDispatch,
  } = useContext(GlobalContext);
  const mostPopular = productState.products.mostPopular;
  console.log(mostPopular);
  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: {
        product,
      },
    });
  };

  const getSingleProduct = (product) => {
    singleProductDispatch({
      type: "GET_SINGLE_PRODUCT",
      payload: product,
    });
    props.history.push(`/product/${product.id}`);
  };

  return (
    <div className="mostPopular flex">
      <div className="container ">
        <div className="product__title">
          <h2 className="title">Most Popular</h2>
        </div>
        <div className="mostPopular__grid">
          {mostPopular !== undefined &&
            mostPopular.map((product) => {
              return (
                <div className="mostPopular__item">
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MostPopular);
