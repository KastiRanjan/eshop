import React, { useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import getProductDetail from "../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../context/Provider";
import Card from "../common/Card/Card";

const ProductList = ({ currentProducts, history,loading  }) => {
  const { productDetailDispatch } = useContext(GlobalContext);

  const getSingleProduct = (id) => {
    getProductDetail(id)(productDetailDispatch);
    history.push(`/product/${id}`);
  };

  let loadingProduct = [];
  for (let i = 0; i < 9; i++) {
    loadingProduct.push(<Card loading={true} key={i} />);
  }
  if (loading == true) {
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
                name={product.name}
                img={imageURL}
                price={product.price}
                discount={product.discount}
                rating={product.averageRating}
                view={
                  <>
                    <button
                      className="card__quickView main-btn flex flex-ai-c fex-jc-c"
                      onClick={() => getSingleProduct(product.id)}
                    >
                      <FaSearchPlus />
                      Quick View
                    </button>
                  </>
                }
                button={
                  <>
                    <button className="favou main-btn icon-btn">
                      <FaHeart />
                    </button>
                    &nbsp;
                    <button className="card__exchange main-btn icon-btn">
                      <FaExchangeAlt />
                    </button>
                    &nbsp;
                    <button className="card__addToCart primary-btn">
                      <FaShoppingCart />
                      Add to Cart
                    </button>
                  </>
                }
              />
            );
          })}
        </div>
      )}
    </>
  );
};
export default withRouter(ProductList);
