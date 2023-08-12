import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ActionBlock from "./ActionBlock";

export default function Sidebar({ actionBlocks }) {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <Droppable droppableId="sidebar" type="ACTION_BLOCK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {actionBlocks.map((blockInfo, index) => (
              <ActionBlock blockInfo={blockInfo} index={index} key={blockInfo.blockid} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
