import * as React from "react";

export const ActionContext = React.createContext();

export const ActionContextProvider = ({ children }) => {
  const [catPosition, setCatPosition] = React.useState({
    x: 0,
    y: 0,
    rotation: 0,
    hidden: false,
  });

  const onClickActions = {
    moveAheadBy10Steps: () => {
      setCatPosition((prevCatPosition) => {
        const newX = prevCatPosition.x + 10;
        return {
          ...prevCatPosition,
          x: newX,
        };
      });
    },
    turn15DegreesAntiClockwise: () => {
      setCatPosition((prevCatPosition) => {
        const newRotation = prevCatPosition.rotation - 15;
        return {
          ...prevCatPosition,
          rotation: newRotation,
        };
      });
    },
    turn15DegreesClockwise: () => {
      setCatPosition((prevCatPosition) => {
        const newRotation = prevCatPosition.rotation + 15;
        return {
          ...prevCatPosition,
          rotation: newRotation,
        };
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
      console.log("divId", divId);
      const divs = document.querySelectorAll(".action-block");
      let currentIndex = 0;
      for (let i = 0; i < divs.length; i++) {
        if (divs[i].children[0].id === divId) {
          currentIndex = i;
          break;
        }
      }

      while (currentIndex < divs.length) {
        const currentDiv = divs[currentIndex];
        console.log("currentDiv", currentDiv);
        let nextDiv = undefined;
        for (let i = 0; i < divs.length; i++) {
          if (i === currentIndex) continue;
          const testDiv = divs[i];
          const currentDivFloor = currentDiv.getBoundingClientRect().bottom;
          const nextDivCeiling = testDiv.getBoundingClientRect().top;
          console.log("currentDivFloor", currentDivFloor);
          console.log("nextDivCeiling", nextDivCeiling);
          if (
            nextDivCeiling >= currentDivFloor &&
            nextDivCeiling - currentDivFloor <= 3
          ) {
            currentIndex = i;
            nextDiv = testDiv;
            console.log("nextDiv", nextDiv);
            console.log("currentIndex", currentIndex);
            break;
          }
        }
        if (nextDiv === undefined) {
          currentIndex = divs.length;
        } else {
          const nextDivId = nextDiv.children[0].id;
          const action = nextDivId.split("_")[0];
          const fn = onClickActions[action];
          if (
            action == "whenThisSpriteClicked" ||
            action == "whenClicked" ||
            action == "repeat10Times"
          ) {
            fn(nextDivId);
          } else {
            fn();
          }
        }
      }
    },
    wait2Seconds: () => {
      const start = Date.now();
      while (Date.now() - start < 2000) {}
    },
    repeat10Times: (divId) => {
      for (let i = 0; i < 10; i++) {
        onClickActions.whenThisSpriteClicked(divId);
      }
    },
    whenClicked: (divId) => {
      onClickActions.whenThisSpriteClicked(divId);
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
