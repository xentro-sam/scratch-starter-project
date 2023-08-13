import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ActionContext } from "../contexts/actionContexts";

export default function ActionBlock({
  blockInfo,
  index,
  midAreaRef,
  inMidArea,
}) {
  const [actionBlockPosition, setActionBlockPosition] = React.useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = React.useState(false);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  const { onClickActions } = React.useContext(ActionContext);
  
  const actionBlockRef = React.useRef(null);

  const handleMouseDown = (event) => {
    if (!inMidArea) return;
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
    if (!inMidArea) return;
    setIsDragging(false);
  };

  if (!inMidArea) {
    return (
      <Draggable draggableId={blockInfo.blockid} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${blockInfo.blockColor}`}
            onClick={onClickActions[blockInfo.blockAction]}
          >
            {blockInfo.blockName}
          </div>
        )}
      </Draggable>
    );
  } else {
    return (
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
            className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${blockInfo.blockColor}`}
            onClick={onClickActions[blockInfo.blockAction]}
          >
            {blockInfo.blockName}
          </div>
        </div>
      </div>
    );
  }
}
