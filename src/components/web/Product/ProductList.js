import React from "react";

import { withRouter } from "react-router";

import Card from "../../common/Card/Card";

const ProductList = ({ currentProducts, loading }) => {
  let loadingProduct = [];
  for (let i = 0; i < 9; i++) {
    loadingProduct.push(<Card loading={true} key={i} />);
  }
  if (loading === true) {
    return <div className="product__store">{loadingProduct}</div>;
  }
  return (
    <>
      {currentProducts.length === 0 ? (
        <div className="product__empty">
          <h4 style={{ fontSize: "20px", fontWeight: "normal" }}>"No product found"</h4>
        </div>
      ) : (
        <div className="product__store">
          {currentProducts.map((product) => {
            const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
            return (
              <Card
                key={product.id}
                id={product.id}
                name={product.name}
                img={imageURL}
                price={product.price}
                discount={product.discount}
                rating={product.averageRating}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default withRouter(ProductList);
