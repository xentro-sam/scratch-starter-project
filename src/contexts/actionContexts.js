import * as React from "react";

export const ActionContext = React.createContext();

export const ActionContextProvider = ({ children }) => {
  const [catPosition, setCatPosition] = React.useState({ x: 0, y: 0, rotation: 0, hidden: false });

  return (
    <ActionContext.Provider
      value={{ catPosition, setCatPosition }}
    >
      {children}
    </ActionContext.Provider>
  );
};
