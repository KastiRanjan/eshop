import React from "react";
import Collection from "../Collection/Collection";
import MostPopular from "../MostPopular/MostPopular";
import NewArrival from "../NewArrival/NewArrival";
import OurProuct from "../OurProduct/OurProuct";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Collection />
      <OurProuct />
      <NewArrival />
      <MostPopular />
    </div>
  );
}
