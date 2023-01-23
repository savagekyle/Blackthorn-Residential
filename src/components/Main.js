import React from "react";
import "./Main.css";
import { Button } from "./Button";
import { useState } from "react";

function Main() {
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="background"></div>
      <div className="main-image"></div>
      <div className="br">
        <div className="br-title">Blackthorn</div>
        <div className="br-title">Residential</div>
      </div>
      <div className="btn-container">
        {button && (
          <Button
            className="btn-spacing"
            buttonSize="btn--large"
            buttonStyle="btn--outline"
          >
            View Work
          </Button>
        )}
        {button && (
          <Button
            className="btn-spacing"
            buttonSize="btn--large"
            buttonStyle="btn--primary"
          >
            Contact
          </Button>
        )}
      </div>
    </>
  );
}

export default Main;
