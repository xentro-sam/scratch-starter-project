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
          className="overflow-auto w-60 flex-none h-full overflow-y-auto flex flex-col items-start"
        >
          {midAreaBlocks.map((blockInfo, index) => (
            <ActionBlock
              key={blockInfo.blockid}
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
