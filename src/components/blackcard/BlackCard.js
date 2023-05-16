import React from "react";
import "./BlackCard.css";
import { Button } from "../button/Button";
import { Link } from "react-router-dom";

function BlackCard() {
  return (
    <div className="background">
      <div className="card-container">
        <p className="card-text">
          "each project is thoroughly analyzed for potential pitfalls and
          creative solutions to give each client a specialized approach to their
          construction projects."
        </p>
        <Link to="/about">
          <Button buttonSize="btn--large" buttonStyle="btn--outline">
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BlackCard;
