import {
  DECREASE_QUANTIT,
  INCREASE_QUANTITY,
  CLEAR_CART,
  ADD_TO_CART,
} from "../../constants/actionTypes";

const cart = (state, { payload, type }) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: state.cart + 1,
        cartPrice: state.cartPrice + payload.price,
        products: { ...state.products, payload },
      };

    case INCREASE_QUANTITY:
      return state;

    case DECREASE_QUANTIT:
      return state;

    case CLEAR_CART:
      return state;

    default:
      return state;
  }
};
//comment
export default cart;
