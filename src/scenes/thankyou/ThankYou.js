import React from "react";
import "./ThankYou.css";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <div className="thank-you">
      <h1>Thank you.</h1>
      <p>
        Your email has been received. We will get back to you as soon as
        possible.
      </p>
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
}

export default ThankYou;
