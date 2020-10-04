export default ({ e, allProductState }) => (dispatch) => {
  if (e.target.value === "position") {
    dispatch({
      type: "FILTER_BY_POSITION",
      payload: allProductState,
    });
  } else if (e.target.value === "price") {
    dispatch({
      type: "FILTER_BY_PRICE",
      payload: allProductState,
    });
  }
  if (e.target.value === "rating") {
    dispatch({
      type: "FILTER_BY_RATING",
      payload: allProductState,
    });
  }
};
