import React, { useContext } from "react";
import Card from "../../../common/Card/Card";
import { GlobalContext } from "../../../../context/Provider";

const NewArrival = () => {
  const { productState } = useContext(GlobalContext);
  const newArrival = productState.products.newArrivals;

  return (
    <div className="newArrival flex">
      {/* <Modal /> */}
      <div className="container ">
        <div className="newArrival__title section-title">
          <h2 className="title">Latest Product</h2>
        </div>
        <div className="newArrival__grid">
          {newArrival !== undefined &&
            newArrival.map((product) => {
              const imageURL = `https://laxmipujapasal.tk/Products/${product.image}`;
              return (
                <div className="newArrival__item" key={product.id}>
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

export default NewArrival;
