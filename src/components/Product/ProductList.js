import React, { useContext, useEffect } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import Card from "../common/Card/Card";

export default function ProductList({ currentProducts }) {
  return (
    <>
      {currentProducts !== undefined &&
        currentProducts.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            img="https://colorlib.com/etc/e-shop/img/product06.jpg"
            price={product.price}
            discount={product.discount}
            rating={product.averageRating}
            view={
              <>
                <button className="card__quickView flex flex-ai-c fex-jc-c">
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
                <button className="card__addToCart">
                  <FaShoppingCart />
                  Add to Cart
                </button>
              </>
            }
          />
        ))}
    </>
  );
}
