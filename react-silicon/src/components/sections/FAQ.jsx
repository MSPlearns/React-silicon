import React, { useContext } from "react";
import FaqCard from "../others/FaqCard";
import FaqProvider, { FaqContext } from "../../contexts/faqContext";

//To do:
// - Limit the number of faqs? Not sure
// - Implement a validation for the fetch request
// - Add a message for a failed request or no data
// - Fix styling (see contact-faq.css)

const FAQ = () => {
  const { faqItems, selectedFaq, handleSingleSelection } =
    useContext(FaqContext);

  return (
    <div className="faqs-container">
      <h3 title="FAQ"></h3>
      <div className="questions-container">
        {faqItems.map((item, index) => (
          <FaqCard
            key={item.id}
            item={item}
            isFirst={index === 0}
            isLast={index === faqItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const FAQComplete = () => (
  <FaqProvider>
    <FAQ />
  </FaqProvider>
);

export default FAQComplete;
