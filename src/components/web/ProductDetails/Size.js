import React from "react";

export default function Size({ sizes }) {
  return (
    <div>
      {sizes.map((size) => (
        <div className="productDetail__sizeOption" key={size.sizeId}>
          Size: {size.size.value}
        </div>
      ))}
    </div>
  );
}
