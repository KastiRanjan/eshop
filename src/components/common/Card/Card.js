import React from "react";
import StarRating from "../StarRating";

export default function Card(props) {
  return (
    <div className="card" style={{ width: "100%" }}>
      <div className="card__img">
        <img src={props.img} alt="" style={{ width: "100%" }} />
        {props.view}
      </div>
      <div className="card__body">
        <div className="card__des flex flex-jc-sb flex-ai-c">
          <h3 className="card__price">
            Rs. {props.price} <del className="card__oldPrice">{props.oldPrice}</del>
          </h3>
          <div className="card__ratiing">
            <StarRating rating={props.rating} />
          </div>
        </div>
        <h2 className="card__title">{props.name}</h2>
        <div className="card__btns flex">{props.button}</div>
      </div>
    </div>
  );
}
