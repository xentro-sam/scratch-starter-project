import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ActionBlock from "./ActionBlock";

export default function MidArea({ midAreaBlocks }) {
  return (
    <Droppable droppableId="mid-area" type="ACTION_BLOCK">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex-1 h-full overflow-auto"
        >
          {midAreaBlocks.map((blockInfo, index) => (
            <ActionBlock
              key={blockInfo.blockName}
              blockInfo={blockInfo}
              index={index}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
