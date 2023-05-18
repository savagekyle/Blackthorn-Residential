import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonials() {
  SwiperCore.use([Autoplay]);
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            He provided a rendering of the finished product, and the final
            results are spectacular.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Gary Baskette</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            We have used Rob and his crews for countless projects over 20 years.
            We continue to call on his services. Highly recommend Blackthorn for
            any project.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Mike and Linda Pitts</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            Rob is always a phone call away for any project we have. Couldn't be
            happier with the results.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Dr. Dale Wortham</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-container">
          <h1>
            I have recommended Rob Savage to many of my partners. His designs
            and finished product are outstanding.
          </h1>
          <FontAwesomeIcon className="quote-icon" icon={faQuoteLeft} />
          <p>Dr. Johnny Altawil</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Testimonials;
