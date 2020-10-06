import React, { useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import getProductDetail from "../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../context/Provider";
import Card from "../common/Card/Card";

const ProductList = ({ currentProducts, history, loading }) => {
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
    return <>{loadingProduct}</>;
  }
  return (
    <>
      {currentProducts.length === 0 ? (
        <h3 style={{ height: "200px" }}>No product</h3>
      ) : (
        currentProducts.map((product) => {
          const image =
            "https://laxmipujapasal.tk/api/category/637331462427447076dorlia damaru.jpg";
          return (
            <Card
              key={product.id}
              name={product.name}
              img={image}
              price={product.price}
              discount={product.discount}
              rating={product.averageRating}
              view={
                <>
                  <button
                    className="card__quickView flex flex-ai-c fex-jc-c"
                    onClick={() => getSingleProduct(product.id)}
                  >
                    <FaSearchPlus />
                    Quick View
                  </button>
                </>
              }
              button={
                <>
                  <button className="favou card__iconBtn">
                    <FaHeart />
                  </button>
                  <button className="card__exchange card__iconBtn">
                    <FaExchangeAlt />
                  </button>
                  <button className="card__addToCart">
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                </>
              }
            />
          );
        })
      )}
    </>
  );
};
export default withRouter(ProductList);
