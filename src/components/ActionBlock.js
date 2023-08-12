import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ActionContext } from "../contexts/actionContexts";

export default function ActionBlock({ blockInfo, index }) {
  const { catPosition, setCatPosition } = React.useContext(ActionContext);

  const onClickActions = {
    "moveAheadBy10Steps": () => {
      setCatPosition({ x: catPosition.x + 10, y: catPosition.y });
    }
  }
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
}
