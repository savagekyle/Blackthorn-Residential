import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/b-logo-white.svg";

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const links = [
    {
      hasDrop: true,
      to: "/gallery",
      name: "Gallery",
      drop1: "/gallery/exterior",
      drop1Name: "exterior",
      drop2: "/gallery/kitchens",
      drop2Name: "kitchens",
      drop3: "/gallery/bathrooms",
      drop3Name: "bathrooms",
    },
    { hasDrop: false, to: "/about", name: "About" },
    { hasDrop: false, to: "/contact", name: "Contact" },
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
                {!link.hasDrop ? (
                  <Link to={link.to} className="nav-links" aria-current="page">
                    <li>{link.name}</li>
                  </Link>
                ) : (
                  <Link to={link.to} className="nav-links" aria-current="page">
                    <li className="dropdown">
                      {link.name}
                      <div className="dropdown-links">
                        <Link to={link.drop1}>{link.drop1Name}</Link>
                        <Link to={link.drop2}>{link.drop2Name}</Link>
                        <Link to={link.drop3}>{link.drop3Name}</Link>
                      </div>
                    </li>
                  </Link>
                )}
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
