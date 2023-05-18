import React from "react";
import "./Contact.css";
import { Button } from "../../components/button/Button";
import Logo from "../../assets/full-blackthorn-logo-white.svg";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-box">
          <div className="general-info">
            <div className="info">
              <h1>GENERAL INFO</h1>
              <hr></hr>
              <p>Rob Savage</p>
              <p>Owner</p>
              <p>rob@blackthornresidential.com</p>
            </div>

            <img src={Logo} alt="br logo" className="full-logo" />
          </div>
          <div className="contact-form">
            <h1>GET IN CONTACT</h1>
            <form
              action="https://formsubmit.co/rob@blackthornresidential.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false"></input>
              <input
                type="text"
                className="first-name-input"
                name="name"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="email-input"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="text"
                className="subject-input"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="message-input"
                name="message"
                placeholder="Type your message here ..."
              ></textarea>
              <Button type="submit">Send Message</Button>
              <input
                type="hidden"
                name="_next"
                value="https://blackthornresidential.com/contact/thank-you"
              ></input>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
