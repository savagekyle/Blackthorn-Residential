import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/br-logo-transparent-white.png";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const links = [
    { to: "/", name: "Home" },
    { to: "/gallery", name: "Gallery" },
    { to: "/about", name: "About" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    <>
      <nav className={click ? "navbar" : "hidden"}>
        <div className="container">
          <Link to="/">
            <img className="navbar-logo" src={Logo} alt="logo" />
          </Link>
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            className="menu-icon"
            onClick={handleClick}
            icon={faBars}
          />
          <ul className={"list-items"}>
            {links.map((link, index) => (
              <React.Fragment key={index}>
                <Link to={link.to} className="nav-links" aria-current="page">
                  <li>{link.name}</li>
                </Link>
                {index !== links.length - 1 && <li className="nav-bars">|</li>}
              </React.Fragment>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={click ? "hidden" : "mobile-menu"}>
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            onClick={closeMobileMenu}
            className="mobile-items"
          >
            <li>{link.name}</li>
          </Link>
        ))}
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
