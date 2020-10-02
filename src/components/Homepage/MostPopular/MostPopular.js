import React, { useEffect, useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import getProduct from "../../../context/actions/product/getProduct";
import { withRouter } from "react-router";
import { GlobalContext } from "../../../context/Provider";
import Card from "../../common/Card/Card";
import getProductDetail from "../../../context/actions/product/getProductDetail";
const MostPopular = ({ history }) => {
  const { cartDispatch, productState, productDispatch, productDetailDispatch } = useContext(
    GlobalContext
  );
  const mostPopular = productState.products.mostPopular;

  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  const addToBasket = (product) => {
    cartDispatch({
      type: "ADD_TO_BASKET",
      payload: product,
    });
    // props.history.push(`/product/${product.id}`);
  };

  const getSingleProduct = (product) => {
    const id = product.id;
    getProductDetail(id)(productDetailDispatch);
    history.push(`/product/${id}`);
  };

  return (
    <div className="mostPopular flex">
      <div className="container ">
        <div className="mostPopular__title ">
          <h2 className="title">Most Popular</h2>
        </div>
        <div className="mostPopular__grid">
          {mostPopular !== undefined &&
            mostPopular.map((product) => {
              return (
                <div className="mostPopular__item" key={product.id}>
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

export default withRouter(MostPopular);
