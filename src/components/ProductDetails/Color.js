import React from "react";

export default function Color({ colors }) {
  return (
    <div>
      {colors.map((color) => (
        <div className="productDetail__colorOption flex flex-ai-c" key={color.id}>
          Color: &nbsp;<button style={{ background: color.code }}></button>
        </div>
      ))}
    </div>
  );
}
