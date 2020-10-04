import {
  FILTER_BY_BRAND,
  FILTER_BY_COLOR,
  FILTER_BY_POSITION,
  FILTER_BY_PRICE,
  FILTER_BY_RATING,
  FILTER_BY_SIZE,
} from "../../constants/actionTypes";

export const productFilter = (state, { payload, type }) => {
  const { name, products } = payload;

  switch (type) {
    case FILTER_BY_POSITION:
      return {
        ...state,
        products: products.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0)),
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        products: products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)),
      };
    case FILTER_BY_COLOR:
      console.log("size");
      return {
        ...state,
        products: products.filter((product) => name == product.colors.map((data) => data.code)),
      };
    case FILTER_BY_SIZE:
      console.log("size");
      return {
        ...state,
        products: products.filter(
          (product) => name.value == product.productSizes.map((data) => data.size.value)
        ),
      };
    case FILTER_BY_RATING:
      return {
        ...state,
        products: products.sort((a, b) => (a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0)),
      };
    case FILTER_BY_BRAND:
      console.log("brend");
      return {
        ...state,
        products: products.filter((product) => product.brand.name === name),
      };
    default:
      return state;
  }
};
