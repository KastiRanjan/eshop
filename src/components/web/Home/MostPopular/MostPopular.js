import React, { useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import getProductDetail from "../../../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../../../context/Provider";
import Card from "../../../common/Card/Card";

const MostPopular = ({ history }) => {
  const { productState, productDetailDispatch } = useContext(GlobalContext);
  const mostPopular = productState.products === [] ? [] : productState.products.mostPopular;

  const getSingleProduct = (id) => {
    getProductDetail(id)(productDetailDispatch);
    // history.push(`/product/${id}`);
  };
  return (
    <div className="mostPopular flex">
      <div className="container ">
        <div className="mostPopular__title section-title">
          <h2 className="title">Most Popular</h2>
        </div>
        <div className="mostPopular__grid">
          {mostPopular !== undefined &&
            mostPopular.map((product) => {
              const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
              return (
                <div className="mostPopular__item" key={product.id}>
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
                          &nbsp; Quick View
                        </button>
                      </>
                    }
                    button={
                      <>
                        <button className="favou main-btn icon-btn">
                          <FaHeart />
                        </button>
                        &nbsp;
                        <button className="card__exchange  main-btn icon-btn">
                          <FaExchangeAlt />
                        </button>
                        &nbsp;
                        <button className="card__addToCart primary-btn">
                          <FaShoppingCart />
                          &nbsp; Add to Cart
                        </button>
                      </>
                    }
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MostPopular);
