import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ActionContext } from "../contexts/actionContexts";

export default function ActionBlock({ blockInfo, index, midAreaRef, inMidArea }) {
  const [actionBlockPosition, setActionBlockPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  const { catPosition, setCatPosition } = React.useContext(ActionContext);
  const actionBlockRef = React.useRef(null);

  const handleMouseDown = (event) => {
    if(!inMidArea) return;
    setIsDragging(true);
    const offsetX = event.clientX - actionBlockPosition.x;
    const offsetY = event.clientY - actionBlockPosition.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (!inMidArea) return;
    if (!isDragging) return;

    const containerRect = midAreaRef.current.getBoundingClientRect();
    const actionBlockRect = actionBlockRef.current.getBoundingClientRect();

    const maxX = containerRect.width - actionBlockRect.width;
    const maxY = containerRect.height - actionBlockRect.height;

    let x = event.clientX - offset.x;
    let y = event.clientY - offset.y;

    // Restrict x and y within the bounds of the container
    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    setActionBlockPosition({
      ...actionBlockPosition,
      x,
      y,
    });
  };

  const handleMouseUp = () => {
    if(!inMidArea) return;
    setIsDragging(false);
  };

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
    <Draggable draggableId={blockInfo.blockid} index={index}>
      {(provided) => (
        <div onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
          <div
            className="absolute"
            style={{
              transform: `translate(${actionBlockPosition.x}px, ${actionBlockPosition.y}px)`,
              cursor: isDragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            ref={actionBlockRef}
          >
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${blockInfo.blockColor}`}
              onClick={onClickActions[blockInfo.blockAction]}
            >
              {blockInfo.blockName}
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
