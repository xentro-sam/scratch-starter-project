import React from "react";
import Icon from "../components/Icon";

const actionBlocksData = [
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
];

export default actionBlocksData;