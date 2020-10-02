import React, { useContext } from "react";
import { GlobalContext } from "../../../context/Provider";
import banner from "../../../img/banner13.jpg";

export default function HotDeal() {
  const { productState } = useContext(GlobalContext);

  const offers = productState.offers;

  return (
    <div className="hotDeal">
      <div className="container">
        <div className="hotDeal__grid">
          {offers !== undefined &&
            offers.map((product) => {
              return (
                <div className="hotDeal__item" key={product.id}>
                  <img src={banner} alt="" style={{ width: "100%" }} />
                  {product.name}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
