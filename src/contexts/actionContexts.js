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
    whenThisSpriteClicked: (divId) => {
      const divs = document.querySelectorAll(".action-block");
      let currentIndex = 0;
      for(let i = 0; i < divs.length; i++) {
        if(divs[i].children[0].id === divId) {
          currentIndex = i;
          break;
        }
      }

      while(currentIndex < divs.length) {
        const currentDiv = divs[currentIndex];
        let nextDiv = undefined;
        for(let i = 0; i < divs.length; i++) {
          if(i === currentIndex) continue;
          const testDiv = divs[i];
          const currentDivFloor = currentDiv.getBoundingClientRect().bottom;
          const nextDivCeiling = testDiv.getBoundingClientRect().top;
          console.log("currentDivFloor", currentDivFloor);
          console.log("nextDivCeiling", nextDivCeiling);
          if ((nextDivCeiling >= currentDivFloor) && (nextDivCeiling - currentDivFloor <= 3)) {
            currentIndex = i;
            nextDiv = testDiv;
            console.log("nextDiv", nextDiv);
            console.log("currentIndex", currentIndex);
            break;
          }
        }
        if(nextDiv === undefined) {
          currentIndex = divs.length;
        } else {
          const action = nextDiv.children[0].id.split("_")[0];
          const fn = onClickActions[action];
          fn();
        }
      }
    }
  };

  return (
    <ActionContext.Provider
      value={{ catPosition, setCatPosition, onClickActions }}
    >
      {children}
    </ActionContext.Provider>
  );
};
