import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../context/Provider";

import img1 from "../../../img/banner10.jpg";

export default function Collection() {
  const { productState } = useContext(GlobalContext);
  const categories = productState.categories;

  return (
    <div className="collection flex">
      <div className="container  ">
        <div className="collection__grid">
          {categories !== [] &&
            categories.map((category, index) => {
              return (
                <Link to="/" className="collection__item" key={index}>
                  <div className="collection__image">
                    <img src={img1} alt="" />
                  </div>
                  <div className="collection__title">
                    <h2>{category.name}</h2>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
}
