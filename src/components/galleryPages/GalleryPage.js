import React, { useState, useEffect } from "react";
import "./GalleryPage.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Title from "../title/Title";

// import ImageUpload from "../../ImageUpload";

function Gallery(props) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadAllImages();
  });

  const loadAllImages = async () => {
    const snapshot = await getDocs(collection(db, props.name));

    let currImages = [];
    snapshot.forEach((doc) => {
      currImages = [...currImages, doc.data().imageUrl];
    });
    setImages(currImages);
  };

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

  data.img &&
    (document.onkeydown = function (event) {
      switch (event.key) {
        case "ArrowLeft":
          imgAction("prev-img");
          break;
        case "ArrowRight":
          imgAction("next-img");
          break;
        default:
          break;
      }
    });

  return (
    <>
      <div className="spacer"></div>
      {data.img && (
        <div className="zoom-img-container">
          <div className="zoom-img" onClick={() => imgAction()}>
            <FontAwesomeIcon
              onClick={(e) => {
                e.stopPropagation();
                imgAction("prev-img");
              }}
              className="prev"
              icon={faAngleLeft}
            />
            <img className="big-img" src={data.img} alt="enlarged" />{" "}
            <FontAwesomeIcon
              onClick={(e) => {
                e.stopPropagation();
                imgAction("next-img");
              }}
              className="next"
              icon={faAngleRight}
            />
          </div>
        </div>
      )}
      <div className="gallery-container">
        <Title name={props.name} />
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 550: 2, 1175: 3 }}
        >
          <Masonry gutter="20px">
            {images &&
              images.map((imageUrl, i) => (
                <img
                  className="images"
                  key={i}
                  src={imageUrl}
                  alt=""
                  onClick={() => viewImage(imageUrl, i)}
                />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Gallery;
