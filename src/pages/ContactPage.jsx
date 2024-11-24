import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";
import "../css/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-all-page">
      <h2>Contact Me</h2>
      <h3>Get in Touch</h3>
      <div className="contact-all-inside">
        <div className="number">
          <div>
            <h3>Number</h3>
          </div>
          <div className="number-inside">
            <FontAwesomeIcon className="phone" icon={faPhone} />
            <span> +994 55 936 17 30</span>
          </div>
        </div>
        <div className="gmail">
          <div>
            <h3>Gmail</h3>
          </div>
          <div className="gmail-inside">
            <FontAwesomeIcon className="gmail-icon" icon={faEnvelope} />
            <span>nesreddin19@email.com</span>
          </div>
        </div>
        <div className="location">
          <div>
            <h3>Location</h3>
          </div>
          <div className="location-inside">
            <FontAwesomeIcon className="location-icon" icon={faMapMarkerAlt} />
            <span> Azerbaijan - Baku City </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;