import React, { useContext } from "react";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import getAllProduct from "../../../context/actions/product/getAllProduct";
import { HeaderContext } from "../../../context/HeaderProvider";
import { GlobalContext } from "../../../context/Provider";
import Dropdown from "../../Dropdown/Dropdown";

export default function Navigation() {
  const { navigationState, navigationDispatch: dispatch } = useContext(HeaderContext);
  const { allProductDispatch } = useContext(GlobalContext);
  const { productState } = useContext(GlobalContext);
  const open = navigationState.openNavigation;
  const { categories } = productState;

  const getProduct = () => {
    getAllProduct()(allProductDispatch);
  };
  return (
    <div
      className={open ? "navigation shadow " : "navigation flex"}
      onClick={() => dispatch({ type: "OPEN_NAVIGATION" })}
    >
      <div className={open ? "container flex open" : "container flex close"}>
        <div className="navigation__menu">
          <div className="navigation__menuHeader flex flex-ai-c flex-jc-sb hide-for-desktop">
            <div className="navigation__menuTitle">{"Menu"}</div>
            <FaList />
          </div>
          <ul id="menu-list" className="navigation__links flex">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/products" onClick={() => getProduct()}>
                Shop
              </Link>
            </li>
            <Dropdown
              value="Categories"
              options={categories}
              className="navigation__item navigation_pages navigation__categories"
            />
            <Dropdown
              value="Pages"
              options={[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Checkout", url: "/checkout" },
              ]}
              className="navigation__item navigation_pages"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
