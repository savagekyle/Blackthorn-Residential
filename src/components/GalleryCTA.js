import React from "react";
import "./GalleryCTA.css";
import Img from "../assets/rustic-interior.jpg";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function GalleryCTA() {
  return (
    <div className="gallery-cta">
      <div className="cta-container">
        <div className="title-wrapper">
          <div className="cta-title">OUR WORK</div>
        </div>

        <div className="img-container">
          <img src={Img} alt="" className="cta-img" />
          <div className="img-btn-wrapper">
            <Link to="/gallery">
              <Button
                className="btn-mobile-sizing"
                buttonSize="btn--largest"
                buttonStyle="btn--outline"
              >
                Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryCTA;
