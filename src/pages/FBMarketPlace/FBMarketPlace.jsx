import React from "react";
import FBIphone from "../../assets/images/fb_iphone.png"
import { FBMPSearchBar } from "../../components";
import "./FBMarketPlace.css";

const FBMarketPlace = () => {
  return (
    <div id="fb_container">
      <div className="fb_text">
        <div className="title">
        Facebook MarketPlace Search Ranking System
        </div>
        <em className="author">
          Francisco Dias
        </em>
        < FBMPSearchBar />
      </div>
      <img src={FBIphone} alt="iphone png with facebook logo"></img>
    </div>
  );
};

export default FBMarketPlace;