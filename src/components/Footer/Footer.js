import React from "react";
import {
  FaAngleRight,
  FaFacebookF,
  FaGooglePlus,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Footer() {
  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  // };
  return (
    <div className="footer-container flex">
      <div className="container">
        <div className="footer">
          <Link to="/" className="footer__logo">
            {/*<img src={logo} alt="" />*/}
          </Link>
          <div className="footer__social">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna
            </p>
            <Link to="/">
              <FaFacebookF />
            </Link>
            <Link to="/">
              <FaGooglePlus />
            </Link>
            <Link to="/">
              <FaInstagram />
            </Link>
            <Link to="/">
              <FaPinterest />
            </Link>
            <Link to="/">
              <FaTwitter />
            </Link>
          </div>
          <div className="footer__links col1">
            <h3>My Account</h3>
            <Link to="/">
              <FaAngleRight /> My Account
            </Link>
            <Link to="/"> My Wishlist</Link>
            <Link to="/"> Compare</Link>
            <Link to="/"> Checkout</Link>
            <Link to="/">Login</Link>
          </div>
          <div className="footer__links col2">
            <h3>Customer Service</h3>
            <Link to="/"> About Us</Link>
            <Link to="/"> Shiping & return</Link>
            <Link to="/"> shiping guide</Link>
            <Link to="/"> FAQ</Link>
          </div>
          <div className="footer__cta">
            <h3>Stay Connected</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
            <input type="text" placeholder="Enter email address" />
            <button>Join Newslatter</button>
          </div>

          <div className="footer__copyright">
            COPYRIGHT ©2020 ALL RIGHTS RESERVED | THIS TEMPLATE IS MADE WITH BY COLORLIB
          </div>
        </div>
      </div>
    </div>
  );
}
