import React, { useState, useEffect, useContext, Suspense } from "react";
import ProductList from "./ProductList";
import getAllProduct from "../../context/actions/product/getAllProduct";
import { GlobalContext } from "../../context/Provider";
import Pagination from "react-js-pagination";
import { FaArrowDown, FaBars, FaThLarge } from "react-icons/fa";

export default function Product() {
  const {
    allProductState,
    productFilterState,
    allProductDispatch,
    productFilterDispatch,
  } = useContext(GlobalContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage, setProductPerpage] = useState(9);
  console.log(allProductState.products);
  const { products, loading } = allProductState;
  console.log(productFilterState);
  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, []);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentProducts =
    productFilterState.products !== undefined
      ? productFilterState.products.slice(indexOfFirstPost, indexOfLastPost)
      : [];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const itemPerPage = (e) => {
    setProductPerpage(e.target.value);
  };

  const productSort = (e) => {
    if (e.target.value === "position") {
      productFilterDispatch({
        type: "FILTER_BY_POSITION",
        payload: allProductState,
      });
    } else if (e.target.value === "price") {
      productFilterDispatch({
        type: "FILTER_BY_PRICE",
        payload: allProductState,
      });
    }
    if (e.target.value === "rating") {
      productFilterDispatch({
        type: "FILTER_BY_RATING",
        payload: allProductState,
      });
    }
  };

  return (
    <div className="product flex">
      <div className="container ">
        <div className="product__grid">
          <div className="product__item aside">
            <div className="aside">
              <h3 className="aside-title">ShopBy</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by price</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by color</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by size</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by brand</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">Top rated product</h3>
            </div>
          </div>
          <div className="product__item product__list">
            <div className="list-header flex flex-jc-sb">
              <StoreFilter
                currentPage={currentPage}
                currentProducts={currentProducts}
                handlePageChange={handlePageChange}
                itemPerPage={itemPerPage}
                productSort={productSort}
              />
            </div>
            <div className="list-mid product__store ">
              <ProductList currentProducts={currentProducts} loading={loading} />
            </div>
            <div className="list-bottom  flex  flex-jc-sb">
              <StoreFilter
                currentPage={currentPage}
                currentProducts={currentProducts}
                handlePageChange={handlePageChange}
                itemPerPage={itemPerPage}
                productSort={productSort}
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
  productSort,
}) => (
  <>
    <div className="left flex flex-ai-c">
      <div className="row-filter">
        <a href="#">
          <FaThLarge />
        </a>
        &nbsp;
        <a href="#" class="active">
          <FaBars />
        </a>
      </div>
      &nbsp;
      <div className="sort-filter">
        <span>Sort By : </span>
        <select class="input" onClick={productSort}>
          <option value="position">Position</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>{" "}
      &nbsp;
      <button className="main-btn icon-btn">
        <FaArrowDown />
      </button>
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
