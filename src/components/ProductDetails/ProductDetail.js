import React, { useContext, useState } from "react";
import Slider from "react-slick";
import { GlobalContext } from "../../context/Provider";
import MostPopular from "../MostPopular/MostPopular";
import img1 from "../../img/thumb-product03.jpg";
import img2 from "../../img/thumb-product01.jpg";
import {
  FaExchangeAlt,
  FaHeart,
  FaShareAlt,
  FaShoppingBasket,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { render } from "@testing-library/react";
import singleProduct from "../../context/reducers/singleProduct";
import Color from "./Color";
import Size from "./Size";
import StarRating from "../common/StarRating";

export default function ProductDetail() {
  const [tab, setTab] = useState("des");
  const { singleProductState } = useContext(GlobalContext);
  const {
    name,
    price,
    image,
    colors,
    productImages,
    discount,
    averageRating,
    description,
    productSizes,
    unit,
  } = singleProductState.singleProduct;
  console.log(singleProductState);
  const settings = {
    dots: false,
    className: "center product-view",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="productDetail">
      <div className="container">
        <div className="productDetail__grid">
          <div className="productDetail__mainView">
            <img src={img1} alt="" />
          </div>
          <div className="productDetail__view ">
            <Slider {...settings} style={{ width: "570px" }}>
              <div className="img1" style={{ width: "152px" }}>
                <img src={img1} alt="" style={{ width: "100%" }} />
              </div>
              <div className="img1" style={{ width: "152px" }}>
                <img src={img2} alt="" style={{ width: "100%" }} />
              </div>
              <div className="img1" style={{ width: "152px" }}>
                <img src={img1} alt="" style={{ width: "100%" }} />
              </div>
              <div className="img1" style={{ width: "152px" }}>
                <img src={img1} alt="" style={{ width: "100%" }} />
              </div>
            </Slider>
          </div>
          <div className="productDetail__body">
            <div className="productDetail__label">
              <span>New</span>
              <span className="sales">{discount}&#37;</span>
            </div>
            <h2 className="productDetail__productName">{name}</h2>
            <h3 className="productdetail__productPrice">
              Rs:{price} <del>${discount}</del>
            </h3>
            <div className="productDetail__productRating">
              <StarRating rating={averageRating} />
            </div>
            <p>
              <strong>Availability: </strong>
              {"In Stock"}
            </p>
            <p>
              <strong>Brand: </strong>
              {"E-Shop"}
            </p>
            <p>{description}</p>
            <div className="productDetail__option">
              <Size sizes={productSizes} />
              <Color colors={colors} />
            </div>
            <div className="productdetail__btns flex flex-jc-sb flex-ai-c">
              <div className="btn-left flex flex-ai-c">
                <div className="amount">
                  Qty:
                  <input type="number" className="input" style={{ width: "90px" }} />
                </div>

                <button className="cart primary-btn">
                  <FaShoppingCart />
                  Add to cart
                </button>
              </div>
              <div className="btn-right">
                <button className="fav main-btn icon-btn">
                  <FaHeart />
                </button>
                <button className="exchange main-btn icon-btn">
                  <FaExchangeAlt />
                </button>
                <button className="share main-btn icon-btn">
                  <FaShareAlt />
                </button>
              </div>
            </div>
          </div>
          <div className="productDetail__tab">
            <ul className="productDetail__tabHeader flex flex-ai-c">
              <li className="active">
                <span onClick={() => setTab("des")}>Description</span>
              </li>
              <li>
                <span onClick={() => setTab("det")}>Detail</span>
              </li>
              <li>
                <span onClick={() => setTab("rev")}>review</span>
              </li>
            </ul>

            <TabRender tab={tab} />
          </div>
        </div>
        <MostPopular />
      </div>
    </div>
  );
}

const Description = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
};

const TabRender = (tab) => {
  if (tab.tab == "des") {
    return <Description />;
  } else if (tab.tab == "det") {
    return <Detail />;
  } else if (tab.tab == "rev") {
    return <Review />;
  }
};
const Detail = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  );
};
const Review = () => {
  return (
    <div className="review">
      <div className="review__page">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </div>
      <div className="review__form">
        <form>
          <input className="input" type="text" placeholder="Your Name" />
          <input className="input" type="email" placeholder="Email Address" />
          <textarea className="input" name="" id="" rows="6" placeholder="Your Review" />
        </form>
      </div>
    </div>
  );
};
