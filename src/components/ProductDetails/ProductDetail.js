import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/Provider";
import { withRouter } from "react-router";
import MostPopular from "../Homepage/MostPopular/MostPopular";
import getProductDetail from "../../context/actions/product/getProductDetail";
import Slider from "react-slick";
import StarRating from "../common/StarRating";
import Size from "./Size";
import Color from "./Color";
import { FaExchangeAlt, FaHeart, FaShareAlt, FaShoppingCart } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import Skeleton from "../Skeleton/Skeleton";

function ProductDetail(props) {
  const { productDetailState, productDetailDispatch } = useContext(GlobalContext);
  const { productDetail, loading } = productDetailState;
  const color = productDetail.length == 0 ? [] : productDetail.colors;
  const sizes = productDetail.length == 0 ? [] : productDetail.productSizes;
  const productImage = productDetail == 0 ? [] : productDetail.productImages;
  const id = props.match.params.id;
  useEffect(() => {
    getProductDetail(id)(productDetailDispatch);
  }, [id, productDetailDispatch]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let slider1 = [];
  let slider2 = [];

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

  const [state, setstate] = useState({
    links: [
      { id: 1, name: "Description" },
      { id: 2, name: "Detail" },
      { id: 3, name: "Review" },
    ],
    activeLink: 1,
  });

  if (loading) {
    return (
      <div className="productDetail flex">
        <div className="container">
          <div className="productDetail__grid">
            <div className="productDetail__details">
              <div className="productDetail__left">
                <div className="productDetail__mainView">
                  <Skeleton />
                </div>
                <div className="productDetail__view flex flex-ai-c">
                  <div className="1" style={{ height: "100px", width: "30%", marginRight: "20px" }}>
                    <Skeleton />
                  </div>
                  <div className="1" style={{ height: "100px", width: "30%", marginRight: "20px" }}>
                    <Skeleton />
                  </div>
                  <div className="1" style={{ height: "100px", width: "30%" }}>
                    <Skeleton />
                  </div>
                </div>
              </div>
              <div className="productDetail__right">
                <div className="productDetail__label" style={{ height: "35px", width: "45px" }}>
                  <Skeleton />
                </div>
                <h2 className="productDetail__productName" style={{ height: "30px", width: "60%" }}>
                  <Skeleton />
                </h2>
                <h3
                  className="productdetail__productPrice"
                  style={{ height: "30px", width: "30%" }}
                >
                  <Skeleton />
                </h3>
                <div
                  className="productDetail__productRating"
                  style={{ height: "30px", width: "40%" }}
                >
                  <Skeleton />
                </div>
                <p style={{ height: "20px" }}>
                  <Skeleton />
                </p>
                <p style={{ height: "20px" }}>
                  <Skeleton />
                </p>
                <p style={{ height: "20px" }}>
                  <Skeleton />
                </p>
                <div className="" style={{ height: "30px", width: "10%" }}>
                  <Skeleton />
                </div>{" "}
                <br />
                <div className="productDetail__btns flex flex-jc-sb ">
                  <div className="btn-left " style={{ height: "35px", width: "30%" }}>
                    <Skeleton />
                  </div>
                  <div className="btn-right" style={{ height: "35px", width: "30%" }}>
                    <Skeleton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="productDetail flex">
      <div className="container">
        <div className="productDetail__grid">
          <div className="productDetail__details">
            <div className="productDetail__left">
              <div className="productDetail__mainView">
                <Slider {...setting2} asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
                  {productImage.map((image, i) => {
                    const imageURL = `https://laxmipujapasal.tk/Products/${image.image}`;
                    return (
                      <div className="productDetail__image" style={{ width: "200px" }} key={i}>
                        <img
                          src={imageURL}
                          alt=""
                          key={i}
                          style={{ width: "100%", height: "455px" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
              <div className="productDetail__view">
                <Slider {...setting1} asNavFor={nav1} ref={(slider) => (slider2 = slider)}>
                  {productImage.map((image, i) => {
                    const imageURL = `https://laxmipujapasal.tk/Products/${image.image}`;
                    return (
                      <div className="productDetail__image" style={{ width: "200px" }} key={i}>
                        <img
                          src={imageURL}
                          alt=""
                          key={i}
                          style={{ width: "100%", height: "100px" }}
                        />
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
            <div className="productDetail__right">
              <div className="productDetail__label">
                <span className="productDetail__labelSales">New</span> &nbsp;
                <span className="productDetail__labelDiscount">{productDetail.discount}&#37;</span>
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
                    QTY: <input type="number" className="input" style={{ width: "90px" }} />{" "}
                  </div>
                  &nbsp;
                  <button className="cart primary-btn ">
                    <FaShoppingCart /> &nbsp; Add to cart{" "}
                  </button>
                </div>
                <div className="btn-right">
                  <button className="fav main-btn icon-btn">
                    <FaHeart />
                  </button>
                  &nbsp;
                  <button className="exchange main-btn icon-btn">
                    <FaExchangeAlt />
                  </button>{" "}
                  &nbsp;{" "}
                  <button className="share main-btn icon-btn">
                    <FaShareAlt />
                  </button>
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="productDetail__tab">
          <ul className="productDetail__tabHeader flex flex-ai-c">
            {state.links.map((link) => (
              <li
                className={link.id == state.activeLink ? "active" : ""}
                onClick={() => setstate({ ...state, activeLink: link.id })}
              >
                <span>{link.name}</span>
              </li>
            ))}
          </ul>
          <TabRender activeLink={state.activeLink} />
        </div>
        <MostPopular />
      </div>
    </div>
  );
}
export default withRouter(ProductDetail);

const TabRender = ({ activeLink }) => {
  if (activeLink === 2) {
    return <Detail />;
  } else if (activeLink === 3) {
    return <Review />;
  } else {
    return <Description />;
  }
};

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
          <div className="review__formGroup">
            <input className="input" type="text" placeholder="Your Name" />
          </div>

          <div className="review__formGroup">
            <input className="input" type="email" placeholder="Email Address" />
          </div>
          <div className="review__formGroup">
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

//             <div className="productDetail__body">
//               <div className="productDetail__label">
//                 <span>New</span>
//                 <span className="sales">{productDetail.discount}&#37;</span>
//               </div>
//
//
//             <div className="productDetail__tab">

//
//           </div>
//         </div>
//         <MostPopular />
//       </div>
//     </div>
//   );
// }
// export default withRouter(ProductDetail);
// const Description = () => {
//   return (
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//   );
// };

// const TabRender = (tab) => {
//   if (tab.tab === "des") {
//     return <Description />;
//   } else if (tab.tab === "det") {
//     return <Detail />;
//   } else if (tab.tab === "rev") {
//     return <Review />;
//   }
// };
// const Detail = () => {
//   return (
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//   );
// };
// const Review = () => {
//   return (
//     <div className="review">
//       <div className="review__page">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
//           ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//         </p>
//       </div>
//       <div className="review__form">
//         <h4 className="text-uppercase ">Write your review</h4>
//         <form>
//           <div className="form-group">
//             <input className="input" type="text" placeholder="Your Name" />
//           </div>

//           <div className="form-group">
//             <input className="input" type="email" placeholder="Email Address" />
//           </div>
//           <div className="form-group">
//             <textarea className="input" name="" id="" rows="6" placeholder="Your Review" />
//           </div>

//           <label htmlFor="">
//             YOUR RATING: <StarRating />
//           </label>
//           <div className="primary-btn">Submit</div>
//         </form>
//       </div>
//     </div>
//   );
// };

{
  /* <div className="productDetail__tab">
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
</div>; */
}

// export default withRouter(ProductDetail);
// const Description = () => {
//   return (
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//   );
// };

// const TabRender = (tab) => {
//   if (tab.tab === "des") {
//     return <Description />;
//   } else if (tab.tab === "det") {
//     return <Detail />;
//   } else if (tab.tab === "rev") {
//     return <Review />;
//   }
// };
// const Detail = () => {
//   return (
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
//       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
//       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
//       non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//   );
// };
// const Review = () => {
//   return (
//     <div className="review">
//       <div className="review__page">
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation
//           ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//         </p>
//       </div>
//       <div className="review__form">
//         <h4 className="text-uppercase ">Write your review</h4>
//         <form>
//           <div className="form-group">
//             <input className="input" type="text" placeholder="Your Name" />
//           </div>

//           <div className="form-group">
//             <input className="input" type="email" placeholder="Email Address" />
//           </div>
//           <div className="form-group">
//             <textarea className="input" name="" id="" rows="6" placeholder="Your Review" />
//           </div>

//           <label htmlFor="">
//             YOUR RATING: <StarRating />
//           </label>
//           <div className="primary-btn">Submit</div>
//         </form>
//       </div>
//     </div>
//   );
// };
