import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../constants/actionTypes";

import productInitialState from "../initialstates/productInitialState";

const products = (state, { payload, type }) => {
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };
      // break;
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
        categories: payload.categories,
        offers: payload.offers,
      };
      // break;
    case PRODUCT_LOAD_ERROR:
      return { ...state, loading: false, error: payload };
      // break;

    default:
      return state;
  }
};

export default products;
