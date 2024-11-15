import React, { createContext, useState, useEffect } from "react";

export const FaqContext = createContext();

const FaqProvider = ({ children }) => {
  const [faqItems, setFaqItems] = useState([]);

  const fetchFaq = async () => {
    const res = await fetch(
      "https://win24-assignment.azurewebsites.net/api/faq"
    );
    const data = await res.json();
    setFaqItems(data);
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleSingleSelection = (id) => {
    setSelectedFaq((prevSelectedFaq) => (prevSelectedFaq === id ? null : id));
  };

  return (
    <FaqContext.Provider
      value={{ faqItems, selectedFaq, handleSingleSelection }}
    >
      {children}
    </FaqContext.Provider>
  );
};

export default FaqProvider;
