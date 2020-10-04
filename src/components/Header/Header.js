import React, { useContext, useState } from "react";
import TopHeader from "./TopHeader";
import logo from "../../img/logo.png";
import { FaSearch, FaBars, FaShoppingCart, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";
import { GlobalContext } from "../../context/Provider";
import searchProduct from "../../context/actions/product/searchProduct";
import { HeaderContext } from "../../context/HeaderProvider";

export default function Header() {
  const [account, setAccount] = useState(undefined);
  const [cart, setCart] = useState(undefined);
  const [keyword, setKeyword] = useState("");
  const { cartState, searchProductDispatch } = useContext(GlobalContext);
  const { navigationDispatch: dispatch } = useContext(HeaderContext);
  const handleSearch = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProduct(keyword)(searchProductDispatch);
  };

  return (
    <header>
      <TopHeader />
      <div className="header flex">
        <div className="container flex flex-jc-sb ">
          <div className="header__left flex ">
            <Link to="/" className="header__logo">
              <img src={logo} alt="" />
            </Link>
            <div className="header__searchBar">
              <form className="header__form" onSubmit={(e) => handleSubmit(e)}>
                <input
                  className=" header__searchInput input "
                  type="text"
                  placeholder="Enter your keyword"
                  onChange={(e) => handleSearch(e)}
                />
                <select className=" header__searchCategories input">
                  <option value="0">All </option>
                  <option value="1">Category 01</option>
                  <option value="1">Category 02</option>
                </select>
                <button className="header__searchBtn">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
          <div className="header__right">
            <div className="header__btns flex">
              <Dropdown
                value="My Account"
                onChange={(v) => setAccount(v)}
                options={accountOptions}
                className="header__accountDropdown "
                button={
                  <button className="header__iconBtn icon-btn">
                    <FaRegUser />
                  </button>
                }
                link={
                  <span className="header__loginBtn">
                    <Link to="/login" className="login">
                      Login
                    </Link>
                    /
                    <Link to="/signup" className="join">
                      Join
                    </Link>
                  </span>
                }
              />

              <Dropdown
                value="My Cart"
                onChange={(v) => setCart(v)}
                options={cartItems}
                className="header__cartDropdown"
                button={
                  <>
                    <span className="header__badge">0</span>
                    <button className="header__iconBtn icon-btn">
                      <FaShoppingCart />
                    </button>
                  </>
                }
                link={<span className="header__priceTag">35.20$</span>}
              />

              <button
                className="header__menuBtn  menu-btn icon-btn hide-for-desktop"
                onClick={() => dispatch({ type: "OPEN_NAVIGATION" })}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

const accountOptions = [
  { name: "My Account", url: "/" },
  { name: "My Wishlist", url: "/compare" },
  { name: "Compare", url: "/compare" },
  { name: "Checkout", url: "/checkout" },
  { name: "Login", url: "/login" },
  { name: "Create Account", url: "/join" },
];

const cartItems = [
  { name: "View Cart", url: "/cart" },
  { name: "Checkout", url: "/checkout" },
];
