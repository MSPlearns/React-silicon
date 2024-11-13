import React, { useEffect, useState } from "react";

const faqCard = (props) => {
  return (
    <div className="content-container">
      <button
        onClick={() => props.onSelect(props.id)}
        className={`faq-header btn faq-btn
          ${props.selected ? "active" : "inactive"} 
          ${props.isFirst ? "first-header" : ""} 
        ${props.isLast ? "last-header" : ""}`}
      >
        <h4>{props.title}</h4>

        <span
          className={`fa fa-sharp fa-solid btn icon-background shape-round ${
            props.selected ? "fa-angle-up close" : "fa-angle-down open"
          }`}
        ></span>
      </button>
      <div
        className={`content 
          ${props.selected ? "active" : ""} 
        ${props.isLast ? "last-content" : ""}`}
      >
        {props.selected ? <p>{props.content}</p> : null}
      </div>
    </div>
  );
};

export default faqCard;
