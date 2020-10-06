import React, { createContext, useEffect, useReducer } from "react";
import cart from "./reducers/cart";
import product from "./reducers/products";
import cartInitialState from "./initialstates/cartInitialState";
import allProductInitialState from "./initialstates/allProductInitialState";
import allProduct from "./reducers/allProduct";
import productInitialState from "./initialstates/productInitialState";
import productDetail from "./reducers/productDetail";
import productDetailInitialState from "./initialstates/productDetailInitialState";
import searchProduct from "./reducers/searchProduct";
import searchProductInitialState from "./initialstates/searchProductInitialState";
import { productFilter } from "./reducers/productFilter";

export const GlobalContext = createContext();

const initialState = {
  products: [],
};

export const GlobalProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cart, cartInitialState);
  const [allProductState, allProductDispatch] = useReducer(allProduct, allProductInitialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [productFilterState, productFilterDispatch] = useReducer(productFilter, []);
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
        productFilterState,
        productFilterDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
