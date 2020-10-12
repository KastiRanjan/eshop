import React, { useContext } from "react";
import Collection from "./Collection/Collection";
import HotDeal from "./HotDeal/HotDeal";
import MostPopular from "./MostPopular/MostPopular";
import NewArrival from "./NewArrival/NewArrival";
import OurProudct from "./OurProduct/OurProudct";
import Slider from "./Slider/Slider";
import { GlobalContext } from "../../../context/Provider";

export default function Home() {
  const { productState } = useContext(GlobalContext);
  const { loading } = productState;

  return (
    <div>
      <Slider />
      <Collection />
      <OurProudct />
      <NewArrival />
      <MostPopular />
    </div>
  );
}
