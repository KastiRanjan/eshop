import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Provider";
import Skeleton from "../../common/Skeleton/Skeleton";

function ProductFilter({ sizes, brands, products, loading }) {
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
  const arr = [1, 2, 3, 4, 5, 6];
  if (loading) {
    return (
      <>
        <div className="aside">
          <h3 className="aside-title">filter by size</h3>
          <ul>
            {arr.map((a) => (
              <li
                style={{
                  width: "80%",
                  height: "10px",
                  margin: "10px 0px",
                }}
              >
                <Skeleton />
              </li>
            ))}
          </ul>
        </div>
        <div className="aside">
          <h3 className="aside-title">filter by brand</h3>
          <ul>
            {arr.map((a) => (
              <li
                style={{
                  width: "80%",
                  height: "10px",
                  margin: "10px 0px",
                }}
              >
                <Skeleton />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
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
    </>
  );
}

export default ProductFilter;
