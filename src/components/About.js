import React from "react";
import "./About.css";
import Img1 from "../assets/rustic-interior.jpg";
import Img2 from "../assets/profile.jpg";
import Img3 from "../assets/vision.jpg";
import Img4 from "../assets/ron-rick.png";

function About() {
  return (
    <>
      <div className="about-page">
        <section className="about-content">
          <h3>About</h3>
          <h1>Blackthorn Residential</h1>
          <hr />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            alias quidem fugit praesentium consequuntur eos autem sit
            accusantium ipsa libero ad temporibus et fuga, quod sunt eius nihil
            provident modi. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Nisi, alias quidem fugit praesentium consequuntur eos autem
            sit accusantium ipsa libero ad temporibus et fuga, quod sunt eius
            nihil provident modi. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Nisi, alias quidem fugit praesentium consequuntur
            eos autem sit accusantium ipsa libero ad temporibus et fuga, quod
            sunt eius nihil provident modi.
          </p>
        </section>
        <section className="about-images">
          <div className="img-section-1">
            <img src={Img1} alt="" />
            <img src={Img2} alt="" />
          </div>
          <div className="img-section-2">
            <img src={Img3} alt="" />
            <img src={Img4} alt="" />
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
