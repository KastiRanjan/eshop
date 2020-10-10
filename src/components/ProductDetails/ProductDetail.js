import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { GlobalContext } from "../../context/Provider";
import { FaExchangeAlt, FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import Color from "./Color";
import Size from "./Size";
import StarRating from "../common/StarRating";
import { withRouter } from "react-router";
import MostPopular from "../Homepage/MostPopular/MostPopular";
import getProductDetail from "../../context/actions/product/getProductDetail";
import Skeleton from "../Skeleton/Skeleton";



function ProductDetail(props) {
  const [tab, setTab] = useState("des");
  const { productDetailState, productDetailDispatch } = useContext(GlobalContext);
  const { productDetail, loading } = productDetailState;
  console.log(loading);
 

  const color = productDetail.length == 0 ? [] : productDetail.colors;
  const sizes = productDetail.length == 0 ? [] : productDetail.productSizes;
  const productImage = productDetail == 0 ? [] : productDetail.productImages;
  useEffect(() => {
 
    const id = props.match.params.id;
    getProductDetail(id)(productDetailDispatch);
  }, []);
  //slidernav
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = [],
    slider2 = [];

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  const setting1 = {
    dots: false,
    className: "center product-view",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    focusOnSelect: true,
    speed: 500,
  };
  const setting2 = {
    dots: false,
    fade: true,
    className: "center product-main-view",
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    focusOnSelect: true,
    speed: 500,
  };

  if(loading===true){
    return(
      <div className="productDetail flex">
      <div className="container">
        <div className="productDetail__grid">
          <div className="productDetail__mainView" style={{height:"355px"}}>
        <img src="https://increasify.com.au/wp-content/uploads/2016/08/default-image.png" alt="" style={{width:"100%"}}/>
          </div>
          <div className="productDetail__view flex flex-jc-sb flex-ai-c " style={{marginTop:"10px"}}>
            <div className="img"  style={{width:"80px",height:"80px"}}> <Skeleton/></div>
            <div className="img"  style={{width:"80px",height:"80px"}}> <Skeleton/></div>
            <div className="img"  style={{width:"80px",height:"80px"}}> <Skeleton/></div>
            <div className="img"  style={{width:"80px",height:"80px"}}> <Skeleton/></div>
            <div className="img"   style={{width:"80px",height:"80px"}}> <Skeleton/></div>
           
           
           </div>
          <div className="productDetail__body">
              <div className="productDetail__label " style={{width:"50px",height:"35px"}}>
                <Skeleton/>
              
              </div>
              <h2 className="productDetail__productName" style={{width:"400px",height:"30px"}}><Skeleton/></h2>
              <h3 className="productdetail__productPrice" style={{width:"200px",height:"30px"}}>
              <Skeleton />
              </h3>
              <div className="productDetail__productRating" style={{width:"300px",height:"30px"}}>
                <Skeleton/>
              </div>
             
              <p style={{width:"400px",height:"50px"}}><Skeleton/></p>
              <div className="productDetail__option">
               
              </div>
              <div className="size"  className="btn1"style={{width:"30px",height:"30px"}}><Skeleton/></div><br/>
              <div className="productDetail__btns flex flex-jc-sb flex-ai-c">
                <div className="btn1"style={{width:"200px",height:"35px"}}><Skeleton/></div>
                <div className="btn2" style={{width:"200px",height:"35px"}}><Skeleton/></div>
              </div>
            </div>
          </div>
          </div>
    </div>
    )
  }
  return (
    <div className="productDetail flex">
      <div className="container">
        <div className="productDetail__grid">
          <div className="productDetail__mainView">
            <Slider
              {...setting2}
              style={{ width: "570px" }}
              asNavFor={nav2}
              ref={(slider) => {
                slider1 = slider;
              }}
            >
              {productImage.map((image) => {
                const imageURL = `https://laxmipujapasal.tk/Products/${image.image}`;
                return (
                  <div className="image-container">
                    <img src={imageURL} alt=""  />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className="productDetail__view ">
            <Slider
              {...setting1}
              style={{ width: "570px" }}
              asNavFor={nav1}
              ref={(slider) => {
                slider2 = slider;
              }}
            >
              {productImage.map((image) => {
                const imageURL = `https://laxmipujapasal.tk/Products/${image.image}`;
                return (
                  <div className="" style={{ width: "152px" }}>
                    <img
                      src={imageURL}
                      alt=""
                      style={{ width: "100%", objectFit: "cover", height: " 80px" }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
       
            <div className="productDetail__body">
              <div className="productDetail__label">
                <span>New</span>
                <span className="sales">{productDetail.discount}&#37;</span>
              </div>
              <h2 className="productDetail__productName">{productDetail.name}</h2>
              <h3 className="productdetail__productPrice">
                Rs:{productDetail.price} <del>${productDetail.discount}</del>
              </h3>
              <div className="productDetail__productRating">
                <StarRating rating={productDetail.averageRating} />
              </div>
              <p>
                <strong>Availability: </strong>
                {"In Stock"}
              </p>
              <p>
                <strong>Brand: </strong>
                {"E-Shop"}
              </p>
              <p>{productDetail.description}</p>
              <div className="productDetail__option">
                <Size sizes={sizes} />
                <Color colors={color} />
              </div>
              <div className="productDetail__btns flex flex-jc-sb ">
                <div className="btn-left flex flex-ai-c">
                  <div className="amount">
                    QTY: <input type="number" className="input" style={{ width: "90px" }} />
                  </div>
                  &nbsp;
                  <button className="cart primary-btn ">
                    <FaShoppingCart /> &nbsp;
                    Add to cart
                  </button>
                </div>
                <div className="btn-right">
                  <button className="fav main-btn icon-btn">
                    <FaHeart />
                  </button>
                  &nbsp;
                  <button className="exchange main-btn icon-btn">
                    <FaExchangeAlt />
                  </button>
                  &nbsp;
                  <button className="share main-btn icon-btn">
                    <FaShareAlt />
                  </button>
                  &nbsp;
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
export default withRouter(ProductDetail);
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
  if (tab.tab === "des") {
    return <Description />;
  } else if (tab.tab === "det") {
    return <Detail />;
  } else if (tab.tab === "rev") {
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
        <h4 className="text-uppercase ">Write your review</h4>
        <form>
          <div className="form-group">
            <input className="input" type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input className="input" type="email" placeholder="Email Address" />
          </div>
          <div className="form-group">
            <textarea className="input" name="" id="" rows="6" placeholder="Your Review" />
          </div>

          <label htmlFor="">
            YOUR RATING: <StarRating />
          </label>
          <div className="primary-btn">Submit</div>
        </form>
      </div>
    </div>
  );
};
