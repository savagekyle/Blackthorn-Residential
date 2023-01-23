import React from "react";
import "./BlackCard.css";
import { Button } from "./Button";

function BlackCard() {
  return (
    <div className="card-container">
      <p className="card-text">
        "Lorem Ipsum is simply dummy text of the printing and typesetting
        industry."
      </p>
      <Button buttonSize="btn--large" buttonStyle="btn--outline">
        Read more
      </Button>
    </div>
  );
}

export default BlackCard;
