import React, { useContext, useEffect } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import getProduct from "../../context/actions/product/getProduct";
import { GlobalContext } from "../../context/Provider";
import Card from "../Card/Card";

export default function ProductList() {
  const { productState, productDispatch, cartDispatch } = useContext(GlobalContext);

  useEffect(() => {
    getProduct()(productDispatch);
  }, []);
  const products = productState.products;

  const addToBasket = (product) => {
    cartDispatch({
      type: "ADD_TO_BASKET",
      payload: {
        product,
      },
    });
  };
  return (
    <div className="container">
      {productState.loading === true && products.length === 0
        ? "loading"
        : products.map((product) => (
            <Card
              name={product.title}
              img={product.image}
              price={product.price}
              oldPrice={product.oldPrice}
              rating={product.rating}
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
          ))}
    </div>
  );
}
