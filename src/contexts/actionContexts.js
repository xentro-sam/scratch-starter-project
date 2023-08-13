import * as React from "react";

export const ActionContext = React.createContext();

export const ActionContextProvider = ({ children }) => {
  const [catPosition, setCatPosition] = React.useState({ x: 0, y: 0, rotation: 0, hidden: false });

  const onClickActions = {
    moveAheadBy10Steps: () => {
      setCatPosition({
        ...catPosition,
        x: catPosition.x + 10,
      });
    },
    turn15DegreesAntiClockwise: () => {
      setCatPosition({
        ...catPosition,
        rotation: catPosition.rotation - 15,
      });
    },
    turn15DegreesClockwise: () => {
      setCatPosition({
        ...catPosition,
        rotation: catPosition.rotation + 15,
      });
    },
    hide: () => {
      setCatPosition({
        ...catPosition,
        hidden: true,
      });
    },
    show: () => {
      setCatPosition({
        ...catPosition,
        hidden: false,
      });
    },
  };

  return (
    <ActionContext.Provider
      value={{ catPosition, setCatPosition, onClickActions }}
    >
      {children}
    </ActionContext.Provider>
  );
};
