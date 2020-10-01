import React from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }) {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" name="rating" value={ratingValue} style={{ display: "none" }} />
            <FaStar color={ratingValue <= 3 ? "#fcc107" : "#e4e5e9"} />
          </label>
        );
      })}
    </div>
  );
}
