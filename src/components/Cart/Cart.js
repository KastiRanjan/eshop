import React, { useContext } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";

export default function Cart() {
  const { cartState } = useContext(GlobalContext);
  const basket = cartState.basket;
  return (
    <div className="cart">
      <div className="container ">
        {basket.length === 0 ? (
          <div style={{ marginLeft: "270px", textAlign: "center", marginBottom: "30px" }}>
            <h1 style={{ textAlign: "center" }}>Your Cart is empty</h1>
            <Link to="/">
              <button>Shop Now</button>
            </Link>
          </div>
        ) : (
          basket.map((data) => {
            return (
              <div className="cart_wrapper flex" style={{ marginLeft: "270px" }}>
                <>
                  <div className="cart__left" style={{ width: "25%" }}>
                    <img src={data.product.img} alt="" style={{ width: "100%" }} />
                  </div>
                  <div className="cart__right" style={{ width: "75%" }}>
                    <h2 className="cart__title">{data.product.name}</h2>
                    <h3>
                      Rs. {data.product.price}{" "}
                      <del className="cart__oldPrice">{data.product.oldPrice}</del>
                    </h3>

                    <h4>Rating:{data.product.rating}</h4>
                    <h4>{data.product.description}</h4>

                    <div className="cart__btns">
                      <Link to="/checkout">
                        <button className="cart__checkout">
                          Checkout <FaArrowCircleRight />
                        </button>
                      </Link>
                    </div>
                  </div>
                </>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
