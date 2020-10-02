import {
  GET_PRODUCTDETAIL_ERROR,
  GET_PRODUCTDETAIL_SUCCESS,
  PRODUCTDETAIL_LOADING,
} from "../../constants/actionTypes";

const productDetail = (state, { payload, type }) => {
  switch (type) {
    case PRODUCTDETAIL_LOADING:
      return { ...state, loading: true };
    case GET_PRODUCTDETAIL_SUCCESS:
      return { ...state, productDetail: payload, loading: false };
      break;
    case GET_PRODUCTDETAIL_ERROR:
      return { ...state, error: payload, loading: false };
      break;
    default:
      return state;
  }
};

export default productDetail;
