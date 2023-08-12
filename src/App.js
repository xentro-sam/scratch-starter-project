import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import Icon from "./components/Icon";

export default function App() {
  const [actionBlocks, setActionBlocks] = useState([
    {
      blockName: (
        <>
          {"When "}
          <Icon name="flag" size={15} className="text-green-600 mx-2" />
          {"clicked"}
        </>
      ),
      blockColor: "bg-yellow-500",
      blockAction: () => {},
      blockid: "when_clicked",
    },
    {
      blockName: "When this sprite clicked",
      blockColor: "bg-yellow-500",
      blockAction: () => {},
      blockid: "when_this_sprite_clicked",
    },
    {
      blockName: "Move 10 steps",
      blockColor: "bg-blue-500",
      blockAction: () => {},
      blockid: "move_10_steps",
    },
    {
      blockName: (
        <>
          {"Turn "}
          <Icon name="undo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </>
      ),
      blockColor: "bg-blue-500",
      blockAction: () => {},
      blockid: "turn_15_degrees_undo",
    },
    {
      blockName: (
        <>
          {"Turn "}
          <Icon name="redo" size={15} className="text-white mx-2" />
          {"15 degrees"}
        </>
      ),
      blockColor: "bg-blue-500",
      blockAction: () => {},
      blockid: "turn_15_degrees_redo",
    },
  ]);

  const [midAreaBlocks, setMidAreaBlocks] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (result.source.droppableId === "sidebar") {
      const draggedBlock = actionBlocks[sourceIndex];

      // Add the dragged block to the mid area
      const updatedMidAreaBlocks = [...midAreaBlocks];
      updatedMidAreaBlocks.splice(destinationIndex, 0, draggedBlock);
      setMidAreaBlocks(updatedMidAreaBlocks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="bg-blue-100 pt-6 font-sans">
        <div className="h-screen overflow-hidden flex flex-row">
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar actionBlocks={actionBlocks} />
            <MidArea midAreaBlocks={midAreaBlocks} />
          </div>
          <div className="w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </div>
      </div>
    </DragDropContext>
  );
}
