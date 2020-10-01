import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../../constants/actionTypes";

const cart = (state, { payload, type }) => {
  console.log(state);
  switch (type) {
    case ADD_TO_BASKET:
      console.log(payload);
      return { ...state, cartItem: [payload, ...state.cartItem] };
      break;
    case REMOVE_FROM_BASKET:
      return { state };
      break;
    default:
      return state;
  }
};

export default cart;
