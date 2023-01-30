import React, { useState } from "react";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

function Gallery() {
  const images = [
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/2000",
    "https://picsum.photos/2000/2000",
  ];

  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }

    if (action === "prev-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }

    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <div className="spacer"></div>
      {data.img && (
        <div className="zoom-img">
          <FontAwesomeIcon
            onClick={() => imgAction()}
            className="close-icon"
            icon={faX}
          />
          <FontAwesomeIcon
            onClick={() => imgAction("prev-img")}
            className="prev"
            icon={faAngleLeft}
          />
          <img className="big-img" src={data.img} alt="enlarged" />{" "}
          <FontAwesomeIcon
            onClick={() => imgAction("next-img")}
            className="next"
            icon={faAngleRight}
          />
        </div>
      )}
      <div className="gallery-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                className="images"
                key={i}
                src={image}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Gallery;
