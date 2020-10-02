import React, { useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import getProductDetail from "../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../context/Provider";
import Card from "../common/Card/Card";

function ProductList({ history, currentProduct }) {
  const { cartDispatch, productDetailDispatch } = useContext(GlobalContext);
  const addToBasket = (product) => {
    console.log(product);
    cartDispatch({
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
    <>
      {currentProduct !== [] &&
        currentProduct.map((product) => {
          return (
            <div className="product__items">
              <Card
                name={product.name}
                img={product.image}
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
    </>
  );
}
export default withRouter(ProductList);
