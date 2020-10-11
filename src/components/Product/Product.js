import React, { useState, useEffect, useContext } from "react";
import ProductList from "./ProductList";
import getAllProduct from "../../context/actions/product/getAllProduct";
import { GlobalContext } from "../../context/Provider";
import Pagination from "react-js-pagination";
import ProductFilter from "./ProductFilter";

export default function Product() {
  const {
    allProductState,
    productFilterState,
    allProductDispatch,
    productFilterDispatch,
  } = useContext(GlobalContext);

  const { products, loading, brands, sizes } = allProductState;
  const finalProduct = productFilterState.length === 0 ? products : productFilterState.products;
  console.log(sizes);
  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, [allProductDispatch]);
  console.log(productFilterState);
  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerpage] = useState(9);
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentProducts = finalProduct.slice(indexOfFirstPost, indexOfLastPost);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemPerPage = (e) => {
    setProductPerpage(e.target.value);
  };

  return (
    <div className="product flex">
      <div className="container ">
        <div className="product__grid">
          <div className="product__item aside">
            <ProductFilter sizes={sizes} brands={brands} products={products} />
          </div>
          <div className="product__item product__list">
            <ProductList currentProducts={currentProducts} loading={loading} />
            {currentProducts.length > 0 && (
              <StoreFilter
                currentPage={currentPage}
                currentProducts={currentProducts}
                handlePageChange={handlePageChange}
                itemPerPage={itemPerPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const StoreFilter = ({
  currentPage,
  currentProducts,
  handlePageChange,
  itemPerPage,
  productSort,
}) => (
  <div className="product__paginator flex  flex-ai-c ">
    <div className="page-filter ">
      <span>Show : </span>
      <select className="input" onClick={(e) => itemPerPage(e)}>
        <option value="9">9</option>
        <option value="6">6</option>
        <option value="3">3</option>
      </select>
    </div>
    &nbsp;&nbsp;&nbsp;
    <div className="page-stores">
      Page:
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={currentProducts.length}
        totalItemsCount={48}
        pageRangeDisplayed={3}
        onChange={handlePageChange}
        hideFirstLastPages={true}
        hideDisabled={true}
      />
    </div>
  </div>
);
