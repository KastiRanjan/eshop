import React, { createContext, useReducer } from "react";
import product from "./reducers/products";
import allProductInitialState from "./initialstates/allProductInitialState";
import allProduct from "./reducers/allProduct";
import productInitialState from "./initialstates/productInitialState";
import productDetail from "./reducers/productDetail";
import productDetailInitialState from "./initialstates/productDetailInitialState";
import searchProduct from "./reducers/searchProduct";
import searchProductInitialState from "./initialstates/searchProductInitialState";
import { productFilter } from "./reducers/productFilter";
import categoryProduct from "./reducers/categoryProuct";
import cart from "./reducers/cart";
import cartInitialState from "./initialstates/cartInitialState";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [allProductState, allProductDispatch] = useReducer(allProduct, allProductInitialState);
  const [productState, productDispatch] = useReducer(product, productInitialState);
  const [cartState, cartDispatch] = useReducer(cart, cartInitialState);
  const [productFilterState, productFilterDispatch] = useReducer(productFilter, []);
  console.log(productFilterState);
  const [categoryProductState, categoryProductDispatch] = useReducer(categoryProduct, {
    loading: false,
    data: [],
    meta: {},
  });
  const [productDetailState, productDetailDispatch] = useReducer(
    productDetail,
    productDetailInitialState
  );
  const [searchProductState, searchProductDispatch] = useReducer(
    searchProduct,
    searchProductInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        productState,
        productDispatch,
        allProductState,
        allProductDispatch,
        productDetailState,
        productDetailDispatch,
        searchProductState,
        searchProductDispatch,
        productFilterState,
        productFilterDispatch,
        categoryProductState,
        categoryProductDispatch,
        cartState,
        cartDispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
