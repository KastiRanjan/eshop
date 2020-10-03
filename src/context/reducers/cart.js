import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../../constants/actionTypes";

const cart = (state, { payload, type }) => {
  console.log(state);
  switch (type) {
    case ADD_TO_BASKET:
      console.log(payload);
      return { ...state, cartItem: [payload, ...state.cartItem] };
      break;
    case REMOVE_FROM_BASKET:
      return { ...state, cartItem: state.cartItem.filter((product) => product.id !== payload) };
      break;
    default:
      return state;
  }
};
//comment
export default cart;
