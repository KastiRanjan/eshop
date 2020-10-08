import React, { useContext } from "react";

import { GlobalContext } from "../../context/Provider";
import Collection from "./Collection/Collection";
import HotDeal from "./HotDeal/HotDeal";
import MostPopular from "./MostPopular/MostPopular";
import NewArrival from "./NewArrival/NewArrival";
import OurProudct from "./OurProduct/OurProudct";

import Slider from "./Slider/Slider";

export default function Home() {
  const { productState, productDispatch } = useContext(GlobalContext);

  const { error } = productState;

  // if (error !== null) {
  //   return (
  //     <div>
  //       <h1 style={{ textAlign: "center" }}>{error}</h1>
  //     </div>
  //   );
  // }
  return (
    <div>
      <Slider />
      <Collection />
      <OurProudct />
      <HotDeal />
      <NewArrival />
      <MostPopular />
    </div>
  );
}
