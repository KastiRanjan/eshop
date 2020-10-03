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

  const [activePage, setActivePage] = useState(9);

  const handlePageChange = () => {};
  return (
    <div className="product flex">
      <div className="container ">
        <div className="product__grid">
          <div className="product__item aside">first</div>
          <div className="product__item product__list">
            <div className="list-header flex">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={450}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
                hideFirstLastPages={true}
              />
            </div>
            <div className="list-mid flex">
              <ProductList allProduct={allProduct} />
            </div>
            <div className="list-bottom">bottom</div>
          </div>
        </div>
      </div>
    </div>
  );
}
