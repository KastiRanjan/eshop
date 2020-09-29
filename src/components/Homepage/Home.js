import React from "react";
import Collection from "../Collection/Collection";
import NewArrival from "../newArrival/NewArrival";
import Slider from "../Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Collection />
      <NewArrival />
    </div>
  );
}
