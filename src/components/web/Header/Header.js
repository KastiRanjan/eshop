import React, { useContext, useState } from "react";
import logo from "../../../img/logo.png";
import {
  FaSearch,
  FaBars,
  FaShoppingCart,
  FaRegUser,
  FaLock,
  FaUserAlt,
  FaHeart,
  FaExchangeAlt,
  FaCheck,
  FaUserPlus,
} from "react-icons/fa";
import { Link, withRouter } from "react-router-dom";
import Dropdown from "../../Dropdown/Dropdown";
import { GlobalContext } from "../../../context/Provider";
import { HeaderContext } from "../../../context/HeaderProvider";
import searchProduct from "../../../context/actions/product/searchProduct";

const Header = ({ history }) => {
  const [keyword, setKeyword] = useState("");
  const { searchProductDispatch } = useContext(GlobalContext);
  const { navigationDispatch: dispatch } = useContext(HeaderContext);
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(keyword)(searchProductDispatch);
    history.push(`/catalog/${keyword}`);
  };

  return (
    <header className="header flex">
      <div className="container flex flex-jc-sb ">
        <div className="header__left flex ">
          <Link to="/" className="header__logo">
            <img className="header__logoImage" src={logo} alt="" />
          </Link>
          <div className="header__searchBar">
            <form className="header__form" onSubmit={(e) => handleSubmit(e)}>
              <input
                className=" header__searchInput input "
                type="text"
                placeholder="Enter your keyword"
                onChange={(e) => handleSearch(e)}
              />
              <button className="header__searchBtn">
                <FaSearch strokeWidth="1" fontSize="15" />
              </button>
            </form>
          </div>
        </div>
        <div className="header__right">
          <div className="header__btns flex">
            <Dropdown
              value="My Account"
              options={accountOptions}
              className="header__accountDropdown "
              button={accountButton()}
              link={link1()}
            />
            <Dropdown
              value="My Cart"
              options={cartItems}
              className="header__cartDropdown"
              button={cartButton()}
              link={<span className="header__priceTag">35.20$</span>}
            />
            <button
              className="header__menuBtn   icon-btn hide-for-desktop"
              onClick={() => dispatch({ type: "OPEN_NAVIGATION" })}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default withRouter(Header);
const accountButton = () => (
  <button className="header__iconBtn main-btn icon-btn">
    <FaRegUser />
  </button>
);
const cartButton = () => (
  <>
    <span className="header__badge">0</span>
    <button className="header__iconBtn main-btn icon-btn">
      <FaShoppingCart />
    </button>
  </>
);
const link1 = () => (
  <span className="header__loginBtn">
    <Link to="/login" className="header__loginLink">
      Login
    </Link>
    /
    <Link to="/signup" className="header__joinLink">
      Join
    </Link>
  </span>
);

const accountOptions = [
  {
    name: "My Account",
    url: "/",
    icon: <FaUserAlt className="dropdown-icon" color="#f8694a" size="14" />,
  },
  {
    name: "My Wishlist",
    url: "/compare",
    icon: <FaHeart className="dropdown-icon" color="#f8694a" size="14" />,
  },
  {
    name: "Compare",
    url: "/compare",
    icon: <FaExchangeAlt className="dropdown-icon" color="#f8694a" size="14" />,
  },
  {
    name: "Checkout",
    url: "/checkout",
    icon: <FaCheck className="dropdown-icon" color="#f8694a" size="14" />,
  },
  {
    name: "Login",
    url: "/login",
    icon: <FaLock className="dropdown-icon" color="#f8694a" size="14" />,
  },
  {
    name: "Create Account",
    url: "/join",
    icon: <FaUserPlus className="dropdown-icon" color="#f8694a" size="14" />,
  },
];

const cartItems = [
  { name: "View Cart", url: "/cart" },
  { name: "Checkout", url: "/checkout" },
];
