import React from "react";
import "./Contact.css";
import { Button } from "./Button";
import Logo from "../assets/full-blackthorn-logo-white.svg";

function Contact() {
  return (
    <>
      <div className="contact-image"></div>
      <div className="form-position">
        <div className="form-container">
          <div className="general-info">
            <h1>GENERAL INFO</h1>
            <hr></hr>
            <p>Rob Savage</p>
            <p>Owner</p>
            <p>rob@blackthornresidential.com</p>
            <p>(865) 388-7284</p>
            <img src={Logo} alt="br logo" />
          </div>
          <form
            className="contact-form"
            action="https://formsubmit.co/43bb4e4ef6ac96d45383ce660fad27aa"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false"></input>
            <span className="first-name">Name</span>
            <input
              type="text"
              className="first-name-input"
              name="name"
              required
            />
            <span className="email">Email</span>
            <input type="email" className="email-input" name="email" required />
            <span className="subject">Subject</span>
            <input type="text" className="subject-input" name="subject" />
            <span className="message">Message</span>
            <textarea className="message-input" name="message"></textarea>
            <Button type="submit">Send Message</Button>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact/thank-you"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
