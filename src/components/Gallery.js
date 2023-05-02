import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faX,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { storage, db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

import ImageUpload from "../ImageUpload";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadAllImages();
  }, []);

  const loadAllImages = async () => {
    const exteriorSnapshot = await getDocs(collection(db, "exterior"));
    const bathroomsSnapshot = await getDocs(collection(db, "bathrooms"));
    const kitchensSnapshot = await getDocs(collection(db, "kitchens"));
    let currImages = [];
    exteriorSnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      currImages = [...currImages, doc.data().imageUrl];
    });
    bathroomsSnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      currImages = [...currImages, doc.data().imageUrl];
    });
    kitchensSnapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
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

  return (
    <>
      <div className="spacer"></div>
      {data.img && (
        <div className="zoom-img-container">
          <div className="zoom-img">
            <div className="x" onClick={() => imgAction()}>
              <FontAwesomeIcon className="close-icon" icon={faX} />
            </div>
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
