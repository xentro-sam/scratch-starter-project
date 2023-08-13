import React from "react";
import { Droppable } from "react-beautiful-dnd";
import ActionBlock from "./ActionBlock";

export default function MidArea({ midAreaBlocks }) {
  const midAreaRef = React.useRef(null);
  return (
    <Droppable droppableId="mid-area" type="ACTION_BLOCK">
      {(provided) => (
        <div ref={midAreaRef}>
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
                midAreaRef={midAreaRef}
                inMidArea={true}
              />
            ))}
            {provided.placeholder}
          </div>
        </div>
      )}
    </Droppable>
  );
}
