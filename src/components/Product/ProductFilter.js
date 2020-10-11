import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

function ProductFilter({ sizes, brands, products }) {
  const { productFilterDispatch } = useContext(GlobalContext);
  const filterByBrand = (id) => {
    console.log(id);
    productFilterDispatch({
      type: "FILTER_BY_BRAND",
      payload: { brandId: id, products: products },
    });
  };
  const filterBySize = (id) => {
    productFilterDispatch({
      type: "FILTER_BY_SIZE",
      payload: { sizeId: id, products: products },
    });
  };
  return (
    <>
      <div className="aside">
        <h3 className="aside-title">filter by size</h3>
        <ul>
          {sizes.map((size) => (
            <li style={{ cursor: "pointer" }} onClick={() => filterBySize(size.id)} key={size.id}>
              {size.value}
            </li>
          ))}
        </ul>
      </div>
      <div className="aside">
        <h3 className="aside-title">filter by brand</h3>
        <ul>
          {brands.map((brand) => (
            <li
              key={brand.id}
              style={{ cursor: "pointer" }}
              onClick={() => filterByBrand(brand.id)}
            >
              {brand.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="aside">
        <h3 className="aside-title">Top rated product</h3>
      </div>
    </>
  );
}

export default ProductFilter;
