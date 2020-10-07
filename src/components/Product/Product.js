import React, { useState, useEffect, useContext, Suspense } from "react";
import ProductList from "./ProductList";
import getAllProduct from "../../context/actions/product/getAllProduct";
import { GlobalContext } from "../../context/Provider";
import Pagination from "react-js-pagination";
import { FaArrowDown, FaBars, FaThLarge } from "react-icons/fa";
import filterProduct from "../../context/actions/product/filterProduct";

export default function Product() {
  const {
    allProductState,
    productFilterState,
    allProductDispatch,
    productFilterDispatch,
  } = useContext(GlobalContext);

  const { products, loading, brands, sizes, error } = allProductState;
  console.log(error);
  const finalProduct = productFilterState.length == 0 ? products : productFilterState.products;
  console.log(finalProduct);
  useEffect(() => {
    getAllProduct()(allProductDispatch);
  }, []);
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

  //filter and sort product
  const productSort = (e) => {
    filterProduct({ e, allProductState })(productFilterDispatch);
  };
  const filterByBrand = (name) => {
    productFilterDispatch({
      type: "FILTER_BY_BRAND",
      payload: { name: name, products: products },
    });
  };
  const filterBySize = (name) => {
    productFilterDispatch({
      type: "FILTER_BY_SIZE",
      payload: { name: name, products: products },
    });
  };
  const filterByColor = (name) => {
    productFilterDispatch({
      type: "FILTER_BY_COLOR",
      payload: { name: name, products: products },
    });
  };
  const arry = products.map((product) => product.colors.map((color) => color.code));
  const newArray = Array.prototype.concat(...arry);
  let unique = [...new Set(newArray)];
  console.log(unique);

  // if (error) {
  //   return (
  //     <div>
  //       <h1 style={{ textAlign: "center" }}>{error}</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="product flex">
      <div className="container ">
        <div className="product__grid">
          <div className="product__item aside">
            <div className="aside">
              <h3 className="aside-title">filter by price</h3>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by color</h3>
              <ul className="flex">
                {unique.map((color) => (
                  <li
                    style={{ marginRight: "5px", cursor: "pointer" }}
                    onClick={() => filterByColor(color)}
                  >
                    <div
                      className="box"
                      style={{ width: "20px", height: "20px", background: color }}
                    ></div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by size</h3>
              <ul>
                {sizes.map((size) => (
                  <li style={{ cursor: "pointer" }} onClick={() => filterBySize(size)}>
                    {size.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aside">
              <h3 className="aside-title">filter by brand</h3>
              <ul>
                {brands.map((brand) => (
                  <li style={{ cursor: "pointer" }} onClick={() => filterByBrand(brand.name)}>
                    {brand.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aside">
              <h3 className="aside-title">Top rated product</h3>
            </div>
          </div>
          <div className="product__item product__list">
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
    <div className="left flex flex-ai-c"></div>
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
