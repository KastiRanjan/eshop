import React, { useContext, useEffect } from "react";
import searchProduct from "../../context/actions/product/searchProduct";
import { GlobalContext } from "../../context/Provider";

export default function SearchList(props) {
  const { searchProductState, searchProductDispatch } = useContext(GlobalContext);
  const { loading, searchedProduct } = searchProductState;
  const query = props.match.params.query;
  useEffect(() => {
    searchProduct(query)(searchProductDispatch);
  }, [query, searchProductDispatch]);

  if (loading) {
    return <div className="container">loading</div>;
  }
  if (searchedProduct.length === 0) {
    return <div className="container">0 item found for "{query}" </div>;
  }

  console.log(searchProductState);
  return (
    <div className="container">
      {searchedProduct.map((products) => (
        <div>{products.name}</div>
      ))}
    </div>
  );
}
