import React from "react";
import "./Gallery.css";
import GalleryItem from "../../../components/galleryItems/GalleryItems";
import kitchenImg from "../../../assets/kitchen.HEIC";
import exteriorImg from "../../../assets/exterior.HEIC";
import bathroomImg from "../../../assets/bathroom.HEIC";

const Gallery = () => {
  return (
    <div className="gallery-home">
      <GalleryItem img={kitchenImg} name="kitchens" />
      <GalleryItem img={exteriorImg} name="exterior" />
      <GalleryItem img={bathroomImg} name="bathrooms" />
    </div>
  );
};

export default Gallery;
