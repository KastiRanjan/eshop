import React, { useContext } from "react";

import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";

import { withRouter } from "react-router";
import { GlobalContext } from "../../../context/Provider";
import Card from "../../common/Card/Card";
import getProductDetail from "../../../context/actions/product/getProductDetail";
const NewArrival = (props) => {
  const { productState, productDetailDispatch } = useContext(GlobalContext);
  const newArrival = productState.products.newArrivals;

  const addToBasket = (product) => {
    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   payload: product,
    // });
  };

  const getSingleProduct = (id) => {
    getProductDetail(id)(productDetailDispatch);
    props.history.push(`/product/${id}`);
  };

  return (
    <div className="newArrival flex">
      {/* <Modal /> */}
      <div className="container ">
        <div className="newArrival__title">
          <h2 className="title">Latest Product</h2>
        </div>
        <div className="newArrival__grid">
          {newArrival !== undefined &&
            newArrival.map((product) => {
              const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
              return (
                <div className="newArrival__item" key={product.id}>
                  <Card
                    name={product.name}
                    img={imageURL}
                    price={product.price}
                    discount={product.discount}
                    rating={product.averageRating}
                    view={
                      <>
                        <button
                          className="card__quickView main-btn flex flex-ai-c fex-jc-c"
                          onClick={() => getSingleProduct(product.id)}
                        >
                          <FaSearchPlus />
                          Quick View
                        </button>
                      </>
                    }
                    button={
                      <>
                        <button className="favou main-btn icon-btn">
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(NewArrival);
