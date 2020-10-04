import {
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_POSITION,
  FILTER_BY_PRICE,
  FILTER_BY_RATING,
  FILTER_BY_SIZE,
} from "../../constants/actionTypes";

export const productFilter = (state, { payload, type }) => {
  switch (type) {
    case FILTER_BY_POSITION:
      return {
        ...state,
        products: payload.products.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0)),
      };
    case "FILTER_BY_PRICE":
      console.log("filter");
      return {
        ...state,
        products: payload.products.sort((a, b) =>
          a.price > b.price ? 1 : b.price > a.price ? -1 : 0
        ),
      };

    case FILTER_BY_COLOR:
      return state;
    case FILTER_BY_SIZE:
      return state;
    case FILTER_BY_RATING:
      return {
        ...state,
        products: payload.products.sort((a, b) =>
          a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
        ),
      };
    case FILTER_BY_BRAND:
      return state;
    default:
      return state;
  }
};
