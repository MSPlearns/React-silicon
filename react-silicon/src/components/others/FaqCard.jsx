import React, { useEffect, useState } from "react";

const faqCard = (props) => {
  return (
    <div className="content-container">
      <button
        className="faq-header btn faq-btn"
        onClick={() => props.onSelect(props.id)}
      >
        <h4>{props.title}</h4>

        <span
          className={`close ${
            props.selected ? "active" : ""
          } fa fa-sharp fa-solid fa-angle-up btn icon-background shape-round`}
        ></span>
        <span
          className={`open ${
            props.selected ? "" : "active"
          } fa fa-sharp fa-solid fa-angle-down btn icon-background shape-round`}
        ></span>
      </button>
      <div className="content active">
        {props.selected ? <p>{props.content}</p> : null}
      </div>
    </div>
  );
};

export default faqCard;
