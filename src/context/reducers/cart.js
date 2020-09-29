import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from "../../constants/actionTypes";
// import cartInitialState from "../initialstates/cartInitialState";
const cart = (state, { payload, type }) => {
  switch (type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, payload] };

    case REMOVE_FROM_BASKET:
      return { state };

    default:
      return state;
  }
};

export default cart;
