const cartInitialState = {
  cartItem: localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : [],
};

export default cartInitialState;
