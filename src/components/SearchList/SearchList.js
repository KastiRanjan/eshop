import React, { useContext, useEffect } from "react";
import searchProduct from "../../context/actions/product/searchProduct";
import { GlobalContext } from "../../context/Provider";
import productDetail from "../../context/reducers/productDetail";

export default function SearchList(props) {
  const { searchProductState, searchProductDispatch } = useContext(GlobalContext);
  const { error, loading, searchedProduct } = searchProductState;
  const query = props.match.params.query;
  useEffect(() => {
    console.log(props.match.params.query);

    searchProduct(query)(searchProductDispatch);
  }, []);

  if (loading) {
    return <div className="container">loading</div>;
  }
  if (searchedProduct.length == 0) {
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
