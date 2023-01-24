import React from "react";
import "./BlackCard.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function BlackCard() {
  return (
    <div className="card-container">
      <p className="card-text">
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      </p>
      <Link to="/about">
        <Button buttonSize="btn--large" buttonStyle="btn--outline">
          Read more
        </Button>
      </Link>
    </div>
  );
}

export default BlackCard;
