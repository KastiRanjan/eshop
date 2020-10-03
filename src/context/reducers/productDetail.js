import {
  GET_PRODUCTDETAIL_ERROR,
  GET_PRODUCTDETAIL_SUCCESS,
  PRODUCTDETAIL_LOADING,
} from "../../constants/actionTypes";

const productDetail = (state, { payload, type }) => {
  switch (type) {
    case PRODUCTDETAIL_LOADING:
      return { ...state, loading: true };
      break;
    case GET_PRODUCTDETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        productDetail: payload,
      };
      break;
    case GET_PRODUCTDETAIL_ERROR:
      return { ...state, loading: false, error: payload };
      break;

    default:
      return state;
  }
};

export default productDetail;
