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
      if (i < images.length - 1) {
        setData({ img: images[i + 1], i: i + 1 });
        console.log(i);
      } else {
        setData({ img: images[0], i: 0 });
        console.log(i);
      }
    }

    if (action === "prev-img") {
      if (i >= 1) {
        setData({ img: images[i - 1], i: i - 1 });
        console.log(i);
      } else {
        setData({ img: images[images.length - 1], i: images.length - 1 });
        console.log(i);
      }
    }

    if (!action) {
      setData({ img: "", i: 0 });
    }
  };

  return (
    <>
      <div className="spacer"></div>
      {data.img && (
        <div className="zoom-img-container">
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
        </div>
      )}
      <div className="gallery-container">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 550: 2, 1175: 3 }}
        >
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
