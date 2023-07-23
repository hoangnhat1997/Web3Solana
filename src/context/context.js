import { createContext } from "react";

export const TwitterContext = createContext();

const state = "1";

export const TwitterProvider = ({ children }) => {
  return (
    <TwitterContext.Provider value={{ state }}>
      {children}
    </TwitterContext.Provider>
  );
};
