import React, { useContext } from "react";
import { FaqContext } from "../../contexts/faqContext";

const FaqCard = ({ item, isFirst, isLast }) => {
  const { selectedFaq, handleSingleSelection } = useContext(FaqContext);

  return (
    <div className="content-container">
      <button
        onClick={() => handleSingleSelection(item.id)}
        className={`faq-header btn faq-btn
          ${selectedFaq === item.id ? "active" : "inactive"} 
          ${isFirst ? "first-header" : ""} 
          ${isLast ? "last-header" : ""}`}
      >
        <h4>{item.title}</h4>

        <span
          className={`fa fa-sharp fa-solid btn icon-background shape-round ${
            selectedFaq === item.id ? "fa-angle-up close" : "fa-angle-down open"
          }`}
        ></span>
      </button>
      <div
        className={`content 
          ${selectedFaq === item.id ? "active" : ""} 
          ${isLast ? "last-content" : ""}`}
      >
        {selectedFaq === item.id ? <p>{item.content}</p> : null}
      </div>
    </div>
  );
};

export default FaqCard;
