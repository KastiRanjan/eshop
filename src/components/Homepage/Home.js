import React, { useContext, useEffect } from "react";
import getProduct from "../../context/actions/product/getProduct";
import { GlobalContext } from "../../context/Provider";
import Collection from "./Collection/Collection";
import HotDeal from "./HotDeal/HotDeal";
import MostPopular from "./MostPopular/MostPopular";
import NewArrival from "./NewArrival/NewArrival";
import OurProuct from "./OurProduct/OurProuct";
import Slider from "./Slider/Slider";

export default function Home() {
  const { productDispatch } = useContext(GlobalContext);
  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);
  return (
    <div>
      <Slider />
      <Collection />
      <OurProuct />
      <HotDeal />
      <NewArrival />
      <MostPopular />
    </div>
  );
}
