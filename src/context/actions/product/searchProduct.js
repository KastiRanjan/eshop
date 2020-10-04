import axios from "axios";
import {
  SEARCHPRODUCT_ERROR,
  SEARCHPRODUCT_LOADING,
  SEARCHPRODUCT_SUCCESS,
} from "../../../constants/actionTypes";

export default (keyword) => (dispatch) => {
  dispatch({
    type: SEARCHPRODUCT_LOADING,
  });
  axios
    .get(`https://laxmipujapasal.tk/api/products/SearchProduct?searchText=${keyword}`)
    .then((res) => {
      console.log(res);
      dispatch({
        type: SEARCHPRODUCT_SUCCESS,
        payload: res.data.data.productDetails,
      });
    })
    .catch((err) =>
      dispatch({
        type: SEARCHPRODUCT_ERROR,
        payload: err,
      })
    );
};
