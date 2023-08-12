import * as React from "react";

export default function ActionBlock(blockInfo) {
  return (
    <div
      className={`flex flex-row flex-wrap text-white px-2 py-1 my-2 text-sm cursor-pointer ${blockInfo.blockColor}`}
      onClick={blockInfo.blockAction}
    >
      {blockInfo.blockName}
    </div>
  );
}
