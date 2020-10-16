import axios from "axios";
import {
  GET_PRODUCTDETAIL_ERROR,
  GET_PRODUCTDETAIL_SUCCESS,
  PRODUCTDETAIL_LOADING,
} from "../../../constants/actionTypes";
export default (id) => (dispatch) => {
  console.log(typeof id);
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
