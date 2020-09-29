import singleProductInitialState from "../initialstates/singleProductInitialState";

const singleProduct = (state, { payload, type }) => {
  switch (type) {
    case "GET_SINGLE_PRODUCT":
      return { ...state, singleProduct: payload };
      break;
    default:
      return state;
  }
};

export default singleProduct;
