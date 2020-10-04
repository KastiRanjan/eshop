import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../constants/actionTypes";

const allProduct = (state, { payload, type }) => {
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload.products,
        brands: payload.brands,
        offers: payload.offers,
        sizes: payload.sizes,
        groceries: payload.groceries,
      };

    case PRODUCT_LOAD_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default allProduct;
