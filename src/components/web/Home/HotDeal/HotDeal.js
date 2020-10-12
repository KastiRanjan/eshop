import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../../../context/Provider";

export default function HotDeal() {
  const { productState } = useContext(GlobalContext);
  const offers = productState.offers;
  const newOffer = offers.concat(offer);

  return (
    <div className="hotDeal flex">
      <div className="container">
        <div className="hotDeal__grid">
          {newOffer !== [] &&
            newOffer.map((offer) => {
              const imageUrl = `https://laxmipujapasal.tk/Offers/${offer.imageUrl}`;
              return (
                <div className="hotDeal__item " key={offer.id}>
                  <img className="hotDeal__img" src={imageUrl} alt="" />
                  <div className="hotDeal__caption">
                    <h2>
                      {offer.name} <br />
                      <span>up to {offer.discount} &#37; Off</span>
                    </h2>

                    <button className="primary-btn">shop now</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

const offer = [
  {
    id: 5,
    discount: 10,
    imageUrl: "637368128556359871horse.jpg",
    name: "New Launch ",
    productCount: 0,
  },
];
