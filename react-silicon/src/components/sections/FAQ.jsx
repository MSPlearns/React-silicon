import React from "react";
import FaqAccordeon from "./FaqAccordeon";
import "./faq.css";
import { Link } from "react-router-dom";

// To do:
// - Turn the contact cards into a component with props
// - Turn the mobile-only contact button into a component  (maybe?)

const Contact = () => {
  return (
    <section id="faq">
      <div className="container">
        <div className="headline-container">
          <h2 className="headline">
            Any questions? <br className="tablet desktop" />
            Check out the FAQs
          </h2>
          <p className="subheadline">
            Still have unanswered question and need to get in touch?
          </p>
        </div>

        <FaqAccordeon />

        <div className="mobile contact">
          <a
            href="#"
            id="contact-btn"
            className="plain-link btn btn-primary shape-rectangular btn-shadow-out"
          >
            Contact us now
          </a>
        </div>

        <div className="desktop tablet">
          <div className="card-container">
            <div className="contact-card">
              <span
                className="text-primary fa-sharp fa-solid fa-phone-volume"
                role="img"
                aria-label="telephone"
              ></span>
              <span>Still have questions?</span>
              <Link to="/contact">
                <span className="text-primary">Contact us</span>
                <span className="fa-sharp fa-solid fa-arrow-right text-primary"></span>
              </Link>
            </div>

            <div className="contact-card">
              <span
                className="text-sucess fa-sharp fa-solid fa-comment-dots fa-flip-horizontal"
                role="img"
                aria-label="message"
              ></span>
              <span>Don&rsquo;t like phone calls?</span>
              <Link to="/contact">
                <span className="text-sucess">Contact us</span>
                <span className="fa-sharp fa-solid fa-arrow-right text-sucess"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
