import { FILTER_BY_BRAND, FILTER_BY_PRICE, FILTER_BY_SIZE } from "../../constants/actionTypes";

export const productFilter = (state, { payload, type }) => {
  const { brandId, products, sizeId } = payload;
  switch (type) {
    case FILTER_BY_PRICE:
      return {
        ...state,
        products: products.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0)),
      };

    case FILTER_BY_SIZE:
      return {
        ...state,
        products: products.filter(
          (product) => sizeId == product.productSizes.map((data) => data.sizeId)
        ),
      };

    case FILTER_BY_BRAND:
      return {
        ...state,
        products: products.filter((product) => product.brandId === brandId),
      };

    default:
      return { ...state };
  }
};
