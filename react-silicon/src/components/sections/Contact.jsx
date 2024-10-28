import React from "react";
import FAQ from "./FAQ";

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

        <FAQ />

        <div className="mobile">
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
                id="phone-icon"
                className="text-primary fa-sharp fa-solid fa-phone-volume"
                role="img"
                aria-label="telephone"
              ></span>
              <span>Still have questions?</span>
              <a href="#">
                <span className="text-primary">Contact us</span>
                <span className="fa-sharp fa-solid fa-arrow-right text-primary"></span>
              </a>
            </div>

            <div className="contact-card">
              <span
                id="message-icon"
                className="text-sucess fa-sharp fa-solid fa-comment-dots fa-flip-horizontal"
                role="img"
                aria-label="telephone"
              ></span>
              <span>Don&rsquo;t like phone calls?</span>
              <a href="#">
                <span className="text-sucess">Contact us</span>
                <span className="fa-sharp fa-solid fa-arrow-right text-sucess"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
