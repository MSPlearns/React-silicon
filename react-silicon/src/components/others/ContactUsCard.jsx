import React from "react";

const ContactUsCard = ({ icon, title, text, linkText, link }) => {
  return (
    <div className="contact-card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="content">
        <h4>{title}</h4>
        <p>{text}</p>
        <a href={link}>{linkText}</a>
      </div>
    </div>
  );
};

export default ContactUsCard;
