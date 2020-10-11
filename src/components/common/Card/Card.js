import React from "react";
import Skeleton from "../../Skeleton/Skeleton";
import StarRating from "../StarRating";

export default function Card({ loading, img, price, view, oldPrice, rating, name, button }) {
  if (loading === true) {
    return (
      <div className="box" style={{ height: "340px" }}>
        <Skeleton />
      </div>
    );
  }
  return (
    <div className="card">
      <div className="card__img">
        {/* <div className="card__label">
          <span>new</span>
        </div> */}
        <img src={img} alt="" />
        {view}
      </div>
      <div className="card__body">
        <div className="card__des flex flex-jc-sb flex-ai-c">
          <h3 className="card__price">
            Rs. {price} <del className="card__oldPrice">{oldPrice}</del>
          </h3>
          <div className="card__ratiing">
            <StarRating rating={rating} />
          </div>
        </div>
        <h2 className="card__title">{name}</h2>
        <div className="card__btns flex">{button}</div>
      </div>
    </div>
  );
}
