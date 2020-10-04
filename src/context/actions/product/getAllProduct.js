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
    .get("https://laxmipujapasal.tk/api/Products/GetAllProducts")
    .then((res) => {
      console.log(res);
      dispatch({
        type: PRODUCT_LOAD_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: PRODUCT_LOAD_ERROR,
        payload: err,
      })
    );
};
