import React, { useContext } from "react";
import Collection from "./Collection/Collection";
// import HotDeal from "./HotDeal/HotDeal";
import MostPopular from "./MostPopular/MostPopular";
import NewArrival from "./NewArrival/NewArrival";
import OurProudct from "./OurProduct/OurProudct";
import Slider from "./Slider/Slider";
import { GlobalContext } from "../../../context/Provider";
import { BeatLoader } from "react-spinners";
import { css } from "@emotion/core";

export default function Home() {
  const { productState } = useContext(GlobalContext);
  const { loading, error } = productState;

  if (loading) {
    const override = css`
      display: block;
      margin: 0 auto;
      border-color: #f57224;
    `;
    return (
      <div
        className="container"
        style={{ textAlign: "center", height: "500px", position: "relative" }}
      >
        <div className="loader">
          <BeatLoader css={override} size={20} color={" #f57224"} loading={loading} />
        </div>
      </div>
    );
  }

  if (error !== null) {
    console.log(error);
    return <div className="container">{error}</div>;
  }
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
