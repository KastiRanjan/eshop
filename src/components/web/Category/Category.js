import React, { useState, useEffect, useContext } from "react";
import Pagination from "react-js-pagination";
import { withRouter } from "react-router";
import { GlobalContext } from "../../../context/Provider";
import getProductByCategory from "../../../context/actions/product/getProductByCategory";
import getAllProduct from "../../../context/actions/product/getAllProduct";
import ProductFilter from "../Product/ProductFilter";
import ProductList from "../Product/ProductList";

const Category = (props) => {
  const {
    allProductState,
    allProductDispatch,
    categoryProductState,
    categoryProductDispatch,
    productFilterState,
  } = useContext(GlobalContext);
  const { brands, sizes } = allProductState;

  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, [allProductDispatch]);
  const { data, loading, meta } = categoryProductState;

  let id = props.match.params.id;
  useEffect(() => {
    getProductByCategory(id)(categoryProductDispatch);
  }, [id]);
  const finalProduct = productFilterState.length === 0 ? data : productFilterState.products;
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
            <ProductFilter products={data} sizes={sizes} brands={brands} />
          </div>
          <div className="product__item product__list">
            <div>
              <h3>{meta.message}</h3>
              <hr />
            </div>

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
};
export default withRouter(Category);
const StoreFilter = ({ currentPage, currentProducts, handlePageChange, itemPerPage }) => (
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
