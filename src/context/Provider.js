import React, { createContext, useEffect, useReducer, useState } from "react";
import navigationInitialState from "./initialstates/navigationInitialState";
import cart from "./reducers/cart";
import product from "./reducers/products";
import navigation from "./reducers/navigation";
import cartInitialState from "./initialstates/cartInitialState";
import allProductInitialState from "./initialstates/allProductInitialState";
import allProduct from "./reducers/allProduct";
import productInitialState from "./initialstates/productInitialState";
import productDetail from "./reducers/productDetail";
import productDetailInitialState from "./initialstates/productDetailInitialState";
import searchProduct from "./reducers/searchProduct";
import searchProductInitialState from "./initialstates/searchProductInitialState";

// import searchProduct from "./actions/product/searchProduct";
// import searchProductInitialState from "./initialstates/searchProductInitialState";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [navigationState, navigationDispatch] = useReducer(navigation, navigationInitialState);
  const [cartState, cartDispatch] = useReducer(cart, cartInitialState);
  const [allProductState, allProductDispatch] = useReducer(allProduct, allProductInitialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [productDetailState, productDetailDispatch] = useReducer(
    productDetail,
    productDetailInitialState
  );
  const [searchProductState, searchProductDispatch] = useReducer(
    searchProduct,
    searchProductInitialState
  );

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartState.cartItem));
  }, [cartState]);

  return (
    <GlobalContext.Provider
      value={{
        navigationState,
        navigationDispatch,
        productState,
        productDispatch,
        cartState,
        cartDispatch,
        allProductState,
        allProductDispatch,
        productDetailState,
        productDetailDispatch,
        searchProductState,
        searchProductDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
