import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import getProductByCategory from "../../../context/actions/product/getProductByCategory";
import { GlobalContext } from "../../../context/Provider";

const Collection = ({ history }) => {
  const { productState, categoryProductDispatch } = useContext(GlobalContext);
  const categories = productState.categories;

  const openCategory = (category) => {
    getProductByCategory(category.id)(categoryProductDispatch);
    history.push(`/${category.name}/${category.id}`);
  };
  return (
    <div className="collection flex">
      <div className="container  ">
        <div className="collection__grid">
          {categories !== [] &&
            categories.map((category, index) => {
              const imageURL = `https://laxmipujapasal.tk/Categories/${category.imageUrl}`;
              return (
                <Link
                  className="collection__item"
                  key={index}
                  onClick={() => openCategory(category)}
                >
                  <div className="collection__image">
                    <img src={imageURL} alt="" />
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
};
export default withRouter(Collection);
