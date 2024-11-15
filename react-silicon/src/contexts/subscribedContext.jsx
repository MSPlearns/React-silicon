import React, { createContext, useState, useEffect } from "react";

export const SubscribedContext = createContext();

const SubscribedProvider = ({ children }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <SubscribedContext.Provider value={{ isSubscribed, setIsSubscribed }}>
      {children}
    </SubscribedContext.Provider>
  );
};

export default SubscribedProvider;
