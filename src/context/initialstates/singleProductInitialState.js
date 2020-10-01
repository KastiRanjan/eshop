const singleProductInitialState = () => {
  const localdata = localStorage.getItem("singleProduct");
  return localdata ? JSON.parse(localdata) : [];
};

export default singleProductInitialState;
