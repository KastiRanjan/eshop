import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../constants/actionTypes";

const allProduct = (state, { payload, type }) => {
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };
      break;
    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        allProduct: payload,
      };
      break;
    case PRODUCT_LOAD_ERROR:
      return { ...state, loading: false, error: payload };
      break;

    default:
      return state;
  }
};

export default allProduct;
