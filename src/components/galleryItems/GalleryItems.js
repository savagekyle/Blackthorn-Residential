import React from "react";
import "./GalleryItems.css";
import { Link } from "react-router-dom";

const GalleryItems = (props) => {
  let path = props.name.toLowerCase();
  return (
    <div className="gallery-item">
      <Link to={path}>
        <img className="gallery-thumbnail" src={props.img} alt={props.name} />
        <h1>{props.name}</h1>
      </Link>
    </div>
  );
};

export default GalleryItems;
