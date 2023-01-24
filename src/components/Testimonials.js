import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Kyle Savage</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Rob Savage</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            My dad is simply the best builder in all of Knoxville. Easily.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Olivia Savage</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testimonials;
