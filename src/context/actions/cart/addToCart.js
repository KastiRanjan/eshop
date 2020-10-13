import { ADD_TO_CART } from "../../../constants/actionTypes";

export default (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });
};
