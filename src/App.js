import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import actionBlocksData from "./data/actionBlocks";
import { ActionContextProvider } from "./contexts/actionContexts";

export default function App() {
  const [actionBlocks, setActionBlocks] = useState(actionBlocksData);

  const [midAreaBlocks, setMidAreaBlocks] = useState([]);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (
      result.source.droppableId === "sidebar" &&
      result.destination.droppableId === "mid-area"
    ) {
      const draggedBlock = actionBlocks[sourceIndex];
      const newBlockId = `${draggedBlock.blockid}_${Date.now()}`;
      const newBlock = {
        ...draggedBlock,
        blockid: newBlockId,
      };
      // Add the dragged block to the mid area
      const updatedMidAreaBlocks = [...midAreaBlocks];
      updatedMidAreaBlocks.splice(destinationIndex, 0, newBlock);
      setMidAreaBlocks(updatedMidAreaBlocks);
    }
  };

  return (
    <ActionContextProvider>
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
    </ActionContextProvider>
  );
}
