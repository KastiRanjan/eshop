import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../constants/actionTypes";

const categoryProduct = (state, { payload, type }) => {
  console.log(payload);
  switch (type) {
    case PRODUCT_LOADING:
      return { ...state, loading: true };

    case PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data.products,
        meta: payload.meta,
      };

    case PRODUCT_LOAD_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default categoryProduct;
