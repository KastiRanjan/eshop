import React, { createContext, useEffect, useReducer, useState } from "react";
// import cartInitialState from "./initialstates/cartInitialState";
import navigationInitialState from "./initialstates/navigationInitialState";
import cart from "./reducers/cart";
import product from "./reducers/products";
import navigation from "./reducers/navigation";
import productInitialState from "./initialstates/productInitialState";
import cartInitialState from "./initialstates/cartInitialState";
import allProduct from "./reducers/allProuct";
import allProductInitialState from "./initialstates/allProductInitialState";
import productDetail from "./reducers/productDetail";
import productDetailInitialState from "./initialstates/productDetailInitialState";
import searchProductInitialState from "./initialstates/searchProductInitialState";
import searchProduct from "./reducers/searchProduct";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [navigationState, navigationDispatch] = useReducer(navigation, navigationInitialState);
  const [cartState, cartDispatch] = useReducer(cart, cartInitialState);
  const [allProductState, allProductDispatch] = useReducer(allProduct, allProductInitialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [searchProductState, searchProductDispatch] = useReducer(
    searchProduct,
    searchProductInitialState
  );
  const [productDetailState, productDetailDispatch] = useReducer(
    productDetail,
    productDetailInitialState
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
        productDetailState,
        productDetailDispatch,
        allProductState,
        allProductDispatch,
        searchProductState,
        searchProductDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
