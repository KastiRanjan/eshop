import React, { useEffect, useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { Redirect, withRouter } from "react-router";
import getProduct from "../../../context/actions/product/getProduct";
import getProductDetail from "../../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../../context/Provider";
import Card from "../../common/Card/Card";
const NewArrival = ({ history }) => {
  const {
    cartDispatch: dispatch,
    productState,
    productDispatch,
    productDetailDispatch,
  } = useContext(GlobalContext);
  const newArrival = productState.products.newArrivals;

  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  const addToBasket = (product) => {
    dispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
  };

  const getSingleProduct = (product) => {
    const id = product.id;
    getProductDetail(id)(productDetailDispatch);
    history.push(`/product/${id}`);
  };

  return (
    <div className="latestProduct">
      <div className="container ">
        <div className="latestProduct__title ">
          <h2 className="title">Latest Product</h2>
        </div>
        <div className="latestProduct__grid">
          {newArrival !== undefined &&
            newArrival.map((product) => {
              return (
                <div className="latestProduct__item" key={product.id}>
                  <Card
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

export default withRouter(NewArrival);
