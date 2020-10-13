import React, { useContext } from "react";
import { FaExchangeAlt, FaHeart, FaSearchPlus, FaShoppingCart } from "react-icons/fa";
import { withRouter } from "react-router";
import addToCart from "../../../context/actions/cart/addToCart";
import getProductDetail from "../../../context/actions/product/getProductDetail";
import { GlobalContext } from "../../../context/Provider";
import Skeleton from "../Skeleton/Skeleton";
import StarRating from "../StarRating";

const Card = ({ loading, id, name, img, price, discount, rating, history }) => {
  const { productDetailDispatch, cartState, cartDispatch } = useContext(GlobalContext);

  const getSingleProduct = (id) => {
    getProductDetail(id)(productDetailDispatch);
    history.push(`/product/${id}`);
  };

  const addProductToCart = ({ name, img, price, discount }) => {
    addToCart({ name, img, price, discount })(cartDispatch);
  };
  console.log(cartState);
  if (loading === true) {
    return (
      <div className="box" style={{ height: "340px" }}>
        <Skeleton />
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt="" />
        <button
          className="card__quickView main-btn flex flex-ai-c fex-jc-c"
          onClick={() => getSingleProduct(id)}
        >
          <FaSearchPlus />
          Quick View
        </button>
      </div>
      <div className="card__body">
        <div className="card__des flex flex-jc-sb flex-ai-c">
          <h3 className="card__price">
            Rs. {price} <del className="card__oldPrice"></del>
          </h3>
          <div className="card__ratiing">
            <StarRating rating={rating} />
          </div>
        </div>
        <h2 className="card__title">{name}</h2>
        <div className="card__btns flex">
          <button className="favou main-btn icon-btn">
            <FaHeart />
          </button>
          &nbsp;
          <button className="card__exchange main-btn icon-btn">
            <FaExchangeAlt />
          </button>
          &nbsp;
          <button
            className="card__addToCart primary-btn"
            onClick={(e) => addProductToCart({ name, img, price, discount })}
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Card);
