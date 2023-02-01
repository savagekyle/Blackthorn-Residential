import React from "react";
import "./Contact.css";
// import { Button } from "./Button";
function Contact() {
  return (
    <>
      {/* <div className="spacer">&nbsp;</div> */}
      <div className="contact-image"></div>
      <div className="form-position">
        <div className="form-container">
          <div className="general-info">
            <h1>GENERAL INFO</h1>
            <p>Rob Savage</p>
            <p>Owner</p>
            <p>rob@blackthornresidential.com</p>
            <p>(865) 388-7284</p>
          </div>
          <div className="contact-form">
            <span className="first-name">Name</span>
            <input type="text" className="first-name-input" name="user_name" />
            <span className="email">Email</span>
            <input type="email" className="email-input" name="user_name" />
            <span className="subject">Subject</span>
            <input type="text" className="subject-input" name="user_name" />
            <span className="message">Message</span>
            <textarea className="message-input" name="message"></textarea>
            <button className="submit-button">Send Message</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
