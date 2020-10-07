import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

export default function Checkout() {
  const { cartState, cartDispatch } = useContext(GlobalContext);
  console.log(cartState.cartItem);

  const removeCartItem = (id) => {
    cartDispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className="checkout">
      <div className="container ">
        <div className="checkout__grid">
          <div className="checkout__form">
            <div className="section-title">
              <h3 className="title">Billing Details</h3>
            </div>
          </div>
          <div className="checkout__shipping">
            <div className="section-title">
              <h4 className="title">Shipping Method</h4>
            </div>
          </div>
          <div className="checkout__payment">
            <div className="section-title">
              <h4 className="title">Payment Method</h4>
            </div>
          </div>
          <div className="checkout__orderReview">
            <div className="section-title">
              <h3 className="title">Order review</h3>
            </div>
            <table className="cart__table">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th></th>
                  <th className="">Price </th>
                  <th className="">Quantity</th>
                  <th className="">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartState.cartItem.length !== 0 ? (
                  cartState.cartItem.map((product) => (
                    <tr>
                      <td>
                        <img src={product.img} alt="" />
                      </td>
                      <td>{product.name}</td>
                      <td className="text-center">
                        {product.price}
                        {/* {product.colors} */}
                      </td>
                      <td className="text-center">1</td>
                      <td className="text-center">{product.price * 2}</td>
                      <td className="text-center">
                        <button
                          className="main-btn icon-btn"
                          onClick={() => removeCartItem(product.id)}
                        >
                          *
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="text-center">No product in cart</tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
