import React from "react";
import "./Main.css";
import BlackCard from "../../components/blackcard/BlackCard";
import Testimonials from "../../components/testimonials/Testimonials";
import GalleryCTA from "../../components/galleryCTA/GalleryCTA";

function Main() {
  return (
    <>
      <div id="home"></div>
      <div className="main-image"></div>
      <div className="br">
        <div className="br-title">Blackthorn</div>
        <div className="br-title">Residential</div>
      </div>
      <BlackCard /> <GalleryCTA /> <Testimonials />
    </>
  );
}

export default Main;
