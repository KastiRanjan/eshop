import React from "react";

export default function Cart() {
  // const { cartState } = useContext(GlobalContext);
  // // const { cart, cartPrice, products } = cartState;
  // console.log(products);
  return (
    <div className="cart">
      <div className="container">
        {/* <div>{products.payload.name}</div>
      <div>{cartPrice}</div> */}
        <div className="cart__productQty flex flex-ai-c">
          <button className="main-btn cart__qtyBtn">-</button>
          <input className="input" type="number" defaultValue="1" />
          <button className="main-btn cart__qtyBtn">+</button>
        </div>
      </div>
    </div>
  );
}
