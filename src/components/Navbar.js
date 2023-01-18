import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            BR
          </Link>
          <FontAwesomeIcon
            className="menu-icon"
            onClick={handleClick}
            icon={click ? faBars : faX}
          />
          <ul className="list-items">
            <Link to="/" onClick={closeMobileMenu} className="nav-links">
              <li>Gallery</li>
            </Link>
            <li className="nav-bars">|</li>
            <Link to="/" onClick={closeMobileMenu} className="nav-links">
              <li>About</li>
            </Link>
            <li className="nav-bars">|</li>
            <Link to="/" onClick={closeMobileMenu} className="nav-links">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
