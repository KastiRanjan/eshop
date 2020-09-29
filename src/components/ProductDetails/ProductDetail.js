import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";

export default function ProductDetail() {
  const { singleProductState } = useContext(GlobalContext);
  return <div>{singleProductState.singleProduct.name}</div>;
}
