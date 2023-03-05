import React from "react";
import "./FBMarketPlace.css";
import FBIphone from "../../assets/images/fb_iphone.png"

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
      </div>
      <img src={FBIphone}></img>
    </div>
  );
};

export default FBMarketPlace;