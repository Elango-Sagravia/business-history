// app/context/AppContext.js
"use client";

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const isSubscribed = email.length > 0;

  return (
    <AppContext.Provider
      value={{ email, setEmail, isSubscribed, setMessage, message }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppProvider;
