import React, { createContext, useEffect, useReducer } from "react";
// import cartInitialState from "./initialstates/cartInitialState";
import navigationInitialState from "./initialstates/navigationInitialState";
import cart from "./reducers/cart";
import product from "./reducers/products";

import navigation from "./reducers/navigation";
import productInitialState from "./initialstates/productInitialState";
import singleProductInitialState from "./initialstates/singleProductInitialState";
import singleProduct from "./reducers/singleProduct";

export const GlobalContext = createContext();

const initialState = {
  cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
};

export const GlobalProvider = ({ children }) => {
  const [navigationState, navigationDispatch] = useReducer(navigation, navigationInitialState);
  const [cartState, cartDispatch] = useReducer(cart, initialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [singleProductState, singleProductDispatch] = useReducer(
    singleProduct,
    [],
    singleProductInitialState
  );
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartState.cartItem));
  }, [cartState]);

  useEffect(() => {
    localStorage.setItem("singleProduct", JSON.stringify(singleProductState));
  }, [singleProductState]);

  return (
    <GlobalContext.Provider
      value={{
        navigationState,
        navigationDispatch,
        productState,
        productDispatch,
        cartState,
        cartDispatch,
        singleProductState,
        singleProductDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
