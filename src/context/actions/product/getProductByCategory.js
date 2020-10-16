import axios from "axios";
import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../../constants/actionTypes";

export default (id) => (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  axios
    .get(`https://laxmipujapasal.tk/api/products/GetProductFromCategory?id=${id}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: PRODUCT_LOAD_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
      dispatch({
        type: PRODUCT_LOAD_ERROR,
        payload: err.message,
      });
    });
};
