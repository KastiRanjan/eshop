import React, { useContext } from "react";

import { GlobalContext } from "../../context/Provider";
import Collection from "./Collection/Collection";
import HotDeal from "./HotDeal/HotDeal";
import MostPopular from "./MostPopular/MostPopular";
import NewArrival from "./NewArrival/NewArrival";
import OurProudct from "./OurProduct/OurProudct";
import Slider from "./Slider/Slider";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";


const override = css`
  display: block;
  margin: 0 auto;
  border-color: #f57224;
  height:25px;
  width:40px
`;
export default function Home() {
  const { productState,} = useContext(GlobalContext);
  const { loading } = productState;


  if (loading) {
    return (
     <div className="container flex flex-jc-c" style={{height:"450px",position:"relative"}}>
      <div className="loader">
      <ClipLoader
              css={override}
              size={150}
              color={"#123abc"}
              loading={loading}
            /> <br/>
      
      </div>
     </div>
    );
  }
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
