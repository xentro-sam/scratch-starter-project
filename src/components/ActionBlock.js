import React from "react";
import { Draggable } from "react-beautiful-dnd";

export default function ActionBlock({ blockInfo, index }) {
  return (
    <Draggable draggableId={blockInfo.blockid} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${blockInfo.blockColor}`}
        >
          {blockInfo.blockName}
        </div>
      )}
    </Draggable>
  );
}
