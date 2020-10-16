import React, { useContext } from "react";
import { withRouter } from "react-router";
import { GlobalContext } from "../../../../context/Provider";
import Card from "../../../common/Card/Card";

const MostPopular = () => {
  const { productState } = useContext(GlobalContext);
  const mostPopular = productState.products === [] ? [] : productState.products.mostPopular;

  return (
    <div className="mostPopular flex">
      <div className="container ">
        <div className="mostPopular__title section-title">
          <h2 className="title">Most Popular</h2>
        </div>
        <div className="mostPopular__grid">
          {mostPopular !== undefined &&
            mostPopular.map((product) => {
              const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
              return (
                <div className="mostPopular__item" key={product.id}>
                  <Card
                    id={product.id}
                    name={product.name}
                    img={imageURL}
                    price={product.price}
                    discount={product.discount}
                    rating={product.averageRating}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MostPopular);
