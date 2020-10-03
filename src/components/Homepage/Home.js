import React, { useContext, useEffect } from "react";
import HotDeal from "./HotDeal/HotDeal";
import Collection from "./Collection/Collection";
import NewArrival from "./NewArrival/NewArrival";
import OurProduct from "./OurProduct/OurProduct";
import Services from "./Service/Services";
import Slider from "./Slider/Slider";
import MostPopular from "./MostPopular/MostPopular";
import { GlobalContext } from "../../context/Provider";
import getProduct from "../../context/actions/product/getProduct";

export default function Home() {
  const { productDispatch } = useContext(GlobalContext);
  useEffect(() => {
    getProduct()(productDispatch);
  }, [productDispatch]);

  return (
    <div>
      <Slider />
      <Collection />
      <OurProduct />
      {/* <Services /> */}
      <HotDeal />
      <NewArrival />
      <MostPopular />
    </div>
  );
}
