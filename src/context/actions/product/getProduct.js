import axios from "axios";
import {
  PRODUCT_LOADING,
  PRODUCT_LOAD_SUCCESS,
  PRODUCT_LOAD_ERROR,
} from "../../../constants/actionTypes";
export default () => (dispatch) => {
  dispatch({
    type: PRODUCT_LOADING,
  });
  axios
    .get(
      "https://laxmipujapasal.tk/api/v2/dashboard?fbclid=IwAR3vhrE0nEnWrvnpF_PM5uxEQOR9wgSn-aIddDVtZZup4iweQJXXwCzP0Jw"
    )
    .then((res) => {
      dispatch({
        type: PRODUCT_LOAD_SUCCESS,
        payload: res.data.data.products.newArrivals,
      });
    })
    .catch((err) =>
      dispatch({
        type: PRODUCT_LOAD_ERROR,
        payload: err,
      })
    );
};
