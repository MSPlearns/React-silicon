import React, { useState, useEffect } from "react";
import FaqCard from "../others/FaqCard";

//To do:
// - Limit the number of faqs? Not sure
// - Implement a validation for the fetch request
// - Add a message for a failed request or no data
// - Fix styling (see contact-faq.css)

const FAQ = () => {
  const [faqItems, setFAQItems] = useState([]);

  const fetchFAQ = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setFAQItems(data);
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleSingleSelection = (id) => {
    setSelectedFaq((prevSelectedFaq) => (prevSelectedFaq === id ? null : id));
  };

  return (
    <div className="faqs-container">
      <h3 title="FAQ"></h3>
      <div className="questions-container">
        {faqItems.map((item, index) => (
          <FaqCard
            id={item.id}
            key={item.id}
            title={item.title}
            content={item.content}
            selected={selectedFaq === item.id}
            onSelect={handleSingleSelection}
            isFirst={index === 0}
            isLast={index === faqItems.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
