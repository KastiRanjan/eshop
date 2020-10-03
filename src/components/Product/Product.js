import React, { useState, useEffect, useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart, FaStar } from "react-icons/fa";
import ProductList from "./ProductList";
import getAllProduct from "../../context/actions/product/getAllProduct";
import { GlobalContext } from "../../context/Provider";
import Pagination from "react-js-pagination";

export default function Product() {
  const { allProductState, allProductDispatch } = useContext(GlobalContext);
  const allProduct = allProductState.allProduct.products;
  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, []);
  console.log(allProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerpage] = useState(9);
  const [sortedProduct, setSortedProduct] = useState();

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentProducts =
    allProduct !== undefined ? allProduct.slice(indexOfFirstPost, indexOfLastPost) : [];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemPerPage = (e) => {
    setProductPerpage(e.target.value);
  };

  const handleSort = (a) => {};

  return (
    <div className="product flex">
      <div className="container ">
        <div className="product__grid">
          <div className="product__item aside">first</div>
          <div className="product__item product__list">
            <div className="list-header flex flex-jc-sb">
              <StoreFilter
                currentPage={currentPage}
                currentProducts={currentProducts}
                handlePageChange={handlePageChange}
                itemPerPage={itemPerPage}
                handleSort={handleSort}
              />
            </div>
            <div className="list-mid product__store ">
              <ProductList currentProducts={currentProducts} />
            </div>
            <div className="list-bottom  flex  flex-jc-sb">
              <StoreFilter
                currentPage={currentPage}
                currentProducts={currentProducts}
                handlePageChange={handlePageChange}
                itemPerPage={itemPerPage}
                handleSort={handleSort}
              />
            </div>
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
  handleSort,
}) => (
  <>
    <div className="left flex flex-ai-c">
      <div className="row-filter">filter</div>
      <div className="sort-filter" onClick={(e) => handleSort(e)}>
        <span>Sort By : </span>
        <select class="input">
          <option value="1">Position</option>
          <option value="2">Price</option>
          <option value="3">Rating</option>
        </select>
      </div>
    </div>
    <div className="right flex  flex-ai-c ">
      <div className="page-filter ">
        <span>Show : </span>
        <select class="input" onClick={(e) => itemPerPage(e)}>
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
  </>
);
