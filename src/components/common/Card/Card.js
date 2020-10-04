import React, { useContext } from "react";
import { GlobalContext, GlobalProvider } from "../../../context/Provider";
import Skeleton from "../../Skeleton";
import StarRating from "../StarRating";

export default function Card({ loading, img, price, view, oldPrice, rating, name, button }) {
  if (loading === true) {
    return (
      <div className="card" style={{ width: "100%", height: "491" }}>
        <div className="card__img" style={{ height: "350px" }}>
          <Skeleton />
        </div>
        <div className="card__body" style={{ padding: "0px" }}>
          <div className="card__des " style={{ height: "20px", padding: "0px" }}>
            <Skeleton />
          </div>
          <div className="card__title" style={{ height: "20px", padding: "0px" }}>
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card__img">
        <div className="card__label">
          <span>new</span>
        </div>
        <img src={img} alt="" style={{ width: "100%" }} />
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
