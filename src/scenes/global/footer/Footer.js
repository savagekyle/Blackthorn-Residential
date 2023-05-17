import React from "react";
import "./Footer.css";

function Footer() {
  const date = new Date();
  var year = date.getFullYear();

  return (
    <div className="footer-container">
      <footer>
        Copyright &copy; {year} Blackthorn Residential, LLC. All Rights
        Reserved.
      </footer>
    </div>
  );
}

export default Footer;
