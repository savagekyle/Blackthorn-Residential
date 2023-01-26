import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  return (
    <>
      <nav className={click ? "navbar" : "hidden"}>
        <div className="container">
          <Link to="/" className="navbar-logo">
            BR
          </Link>
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            className="menu-icon"
            onClick={handleClick}
            icon={faBars}
          />
          <ul className={"list-items"}>
            <Link to="/gallery" className="nav-links">
              <li>Gallery</li>
            </Link>
            <li className="nav-bars">|</li>
            <Link to="/about" className="nav-links">
              <li>About</li>
            </Link>
            <li className="nav-bars">|</li>
            <Link to="/contact" className="nav-links">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={click ? "hidden" : "mobile-menu"}>
        <Link to="/" onClick={closeMobileMenu} className="mobile-items">
          <li>Home</li>
        </Link>
        <Link to="/gallery" onClick={closeMobileMenu} className="mobile-items">
          <li>Gallery</li>
        </Link>
        <Link to="/about" onClick={closeMobileMenu} className="mobile-items">
          <li>About</li>
        </Link>
        <Link to="/contact" onClick={closeMobileMenu} className="mobile-items">
          <li>Contact</li>
        </Link>
        <FontAwesomeIcon
          className={"mobile-menu-icon"}
          onClick={handleClick}
          icon={faBars}
        />
      </ul>
    </>
  );
}

export default Navbar;
