import React from "react";
import "./GalleryCTA.css";
import Img from "../assets/rustic-interior.jpg";

function GalleryCTA() {
  return (
    <div className="black-container">
      <div className="main-content">
        <div className="our-work">Our Work</div>
        <img className="cta-img" src={Img} alt=""></img>
      </div>
    </div>
  );
}

export default GalleryCTA;
