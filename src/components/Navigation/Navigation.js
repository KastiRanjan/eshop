import React, { useContext, useState } from "react";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HeaderContext } from "../../context/HeaderProvider";

import Dropdown from "../Dropdown/Dropdown";
export default function Navigation() {
  const [account, setAccount] = useState(undefined);
  const [cart, setCart] = useState(undefined);
  const { navigationState, navigationDispatch: dispatch } = useContext(HeaderContext);
  const open = navigationState.openNavigation;

  return (
    <div
      className={open ? "navigation shadow " : "navigation flex"}
      onClick={() => dispatch({ type: "OPEN_NAVIGATION" })}
    >
      <div className={open ? "container flex open" : "container flex close"}>
        {/* <div className="navigation__category">
          <div className="navigation__categoryMenuHeader flex flex-ai-c flex-jc-sb">
            <div className="navigation__categoryTitle">categories</div>
            <FaList />
          </div>
        </div> */}
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
              <Link to="/products">Shop</Link>
            </li>
            <Dropdown
              value="Women"
              onChange={(v) => setAccount(v)}
              options={[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Checkout", url: "/checkout" },
              ]}
              className="navigation__item navigation_pages"
            />
            <Dropdown
              value="Men"
              onChange={(v) => setCart(v)}
              options={[
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
                { name: "Checkbbbbbbbbbbbbbbvvvvvvvvvvvvvvvvvhhhhhhhhhhout", url: "/checkout" },
              ]}
              className="navigation__item navigation_pages"
            />
            <li className="navigation__item">
              <Link to="/sales">Sales</Link>
            </li>

            <Dropdown
              value="Pages"
              onChange={(v) => setAccount(v)}
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
