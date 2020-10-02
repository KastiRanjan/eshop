import axios from "axios";
import {
  PRODUCTDETAIL_LOADING,
  GET_PRODUCTDETAIL_SUCCESS,
  GET_PRODUCTDETAIL_ERROR,
} from "../../../constants/actionTypes";
export default (id) => (dispatch) => {
  dispatch({
    type: PRODUCTDETAIL_LOADING,
  });
  axios
    .get(`https://laxmipujapasal.tk/api/products/GetProductDetails?id=${id}`)
    .then((res) => {
      dispatch({
        type: GET_PRODUCTDETAIL_SUCCESS,
        payload: res.data.data.productDetails,
      });
    })
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTDETAIL_ERROR,
        payload: err,
      })
    );
};
