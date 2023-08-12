import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ActionBlock from "./ActionBlock";

export default function Sidebar({ actionBlocks }) {
  const getActionBlocks = (blockType) => {
    return actionBlocks.map((blockInfo, index) => (
      blockInfo.blockType === blockType && <ActionBlock blockInfo={blockInfo} index={index} key={blockInfo.blockid} />
    ));
  };
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <Droppable droppableId="sidebar" type="ACTION_BLOCK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {getActionBlocks("event")}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="font-bold"> {"Motion"} </div>
      <Droppable droppableId="sidebar" type="ACTION_BLOCK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {getActionBlocks("motion")}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="font-bold"> {"Looks"} </div>
      <Droppable droppableId="sidebar" type="ACTION_BLOCK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {getActionBlocks("looks")}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="font-bold"> {"Control"} </div>
      <Droppable droppableId="sidebar" type="ACTION_BLOCK">
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {getActionBlocks("control")}
            {provided.placeholder}
          </div>
        )}
      </Droppable>  
    </div>
  );
}
