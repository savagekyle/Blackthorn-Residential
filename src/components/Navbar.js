import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            Test
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
