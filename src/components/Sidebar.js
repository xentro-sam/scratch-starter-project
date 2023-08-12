import React from "react";
import Icon from "./Icon";
import ActionBlock from "./ActionBlock";

export default function Sidebar() {
  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
      <div className="font-bold"> {"Events"} </div>
      <ActionBlock
        blockName={
          <>
            {"When "}
            <Icon name="flag" size={15} className="text-green-600 mx-2" />
            {"clicked"}
          </>
        }
        blockColor="bg-yellow-500"
        blockAction={() => {}}
      />
      <ActionBlock
        blockName="When this sprite clicked"
        blockColor="bg-yellow-500"
        blockAction={() => {}}
      />
      <div className="font-bold"> {"Motion"} </div>
      <ActionBlock
        blockName="Move 10 steps"
        blockColor="bg-blue-500"
        blockAction={() => {}}
      />
      <ActionBlock
        blockName={
          <>
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </>
        }
        blockColor="bg-blue-500"
        blockAction={() => {}}
      />
      <ActionBlock
        blockName={
          <>
            {"Turn "}
            <Icon name="undo" size={15} className="text-white mx-2" />
            {"15 degrees"}
          </>
        }
        blockColor="bg-blue-500"
        blockAction={() => {}}
      />
    </div>
  );
}
