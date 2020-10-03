import {
  SEARCHPRODUCT_ERROR,
  SEARCHPRODUCT_LOADING,
  SEARCHPRODUCT_SUCCESS,
} from "../../constants/actionTypes";

const searchProduct = (state, { payload, type }) => {
  switch (type) {
    case SEARCHPRODUCT_LOADING:
      return { ...state, loading: true };
      break;
    case SEARCHPRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        searchedProduct: payload,
      };
      break;
    case SEARCHPRODUCT_ERROR:
      return { ...state, loading: false, error: payload };
      break;

    default:
      return state;
  }
};

export default searchProduct;
