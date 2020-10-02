import React, { useState, useEffect, useContext } from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Pagination from "react-js-pagination";
import getAllProduct from "../../context/actions/product/getAllProduct";
import { GlobalContext } from "../../context/Provider";

import ProductList from "./ProductList";

export default function Product() {
  const { productState, productDispatch, allProductState, allProductDispatch } = useContext(
    GlobalContext
  );
  const products = allProductState.allProduct.products;

  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, []);

  const productPerPage = 9;
  const [activePage, setCurrentPage] = useState(2);
  const indexOfLastTodo = activePage * productPerPage;
  const indexOfFirstTodo = indexOfLastTodo - productPerPage;
  const currentProduct =
    products !== undefined ? products.slice(indexOfFirstTodo, indexOfLastTodo) : [];
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="product">
      {/* <Modal /> */}
      <div className="container ">
        <div className="product__grid">
          <div className="product__aside">Shop By</div>
          <div className="product__filter">
            <div className="product__filterTop flex flex-ai-c flex-jc-sb">
              <div className="left">filter</div>
              <div className="right flex">
                Page:{" "}
                <Paginate
                  activePage={activePage}
                  currentProduct={currentProduct}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
            <div className="product__content">
              <ProductList currentProduct={currentProduct} />
            </div>

            <div className="product__filterBottom flex-ai-c flex-jc-sb">
              <div className="left">filter</div>
              <div className="right flex">
                Page :
                <Paginate
                  activePage={activePage}
                  currentProduct={currentProduct}
                  handlePageChange={handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

const Paginate = ({ activePage, currentProduct, handlePageChange }) => {
  return (
    <Pagination
      activePage={activePage}
      itemsCountPerPage={1}
      totalItemsCount={currentProduct.length}
      pageRangeDisplayed={3}
      onChange={handlePageChange}
      hideDisabled={true}
      hideFirstLastPages={true}
      nextPageText={<FaCaretRight />}
      prevPageText={<FaCaretLeft />}
    />
  );
};
