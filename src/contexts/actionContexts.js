import * as React from "react";

export const ActionContext = React.createContext();

export const ActionContextProvider = ({ children }) => {
  const [catPosition, setCatPosition] = React.useState({ x: 0, y: 0 });

  const moveAheadBy10Steps = () => {
    setCatPosition((prevPosition) => ({
      ...prevPosition,
      x: prevPosition.x + 10,
    }));
  };

  return (
    <ActionContext.Provider
      value={{ catPosition, setCatPosition, moveAheadBy10Steps }}
    >
      {children}
    </ActionContext.Provider>
  );
};
