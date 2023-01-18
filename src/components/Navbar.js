import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            BR
          </Link>
          <ul className="list-items">
            <li className="nav-links">Gallery</li>
            <li className="nav-links">About</li>
            <li className="nav-links">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
