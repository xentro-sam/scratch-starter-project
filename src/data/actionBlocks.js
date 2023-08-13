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
    blockAction: "whenClicked",
    blockid: "when_clicked",
    blockType: "event",
  },
  {
    blockName: "When this sprite clicked",
    blockColor: "bg-yellow-500",
    blockAction: "whenThisSpriteClicked",
    blockid: "when_this_sprite_clicked",
    blockType: "event",
  },
  {
    blockName: "Move 10 steps",
    blockColor: "bg-blue-500",
    blockAction: "moveAheadBy10Steps",
    blockid: "move_10_steps",
    blockType: "motion",
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
    blockAction: "turn15DegreesAntiClockwise",
    blockid: "turn_15_degrees_undo",
    blockType: "motion",
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
    blockAction: "turn15DegreesClockwise",
    blockid: "turn_15_degrees_redo",
    blockType: "motion",
  },
  {
    blockName: "Show",
    blockColor: "bg-purple-500",
    blockAction: "show",
    blockid: "show",
    blockType: "looks",
  },
  {
    blockName: "Hide",
    blockColor: "bg-purple-500",
    blockAction: "hide",
    blockid: "hide",
    blockType: "looks",
  },
  {
    blockName: "Wait 2 seconds",
    blockColor: "bg-red-500",
    blockAction: "wait2Seconds",
    blockid: "wait_2_seconds",
    blockType: "control",
  },
  {
    blockName: "Repeat 10 times",
    blockColor: "bg-red-500",
    blockAction: "repeat10Times",
    blockid: "repeat_10_times",
    blockType: "control",
  },
];

export default actionBlocksData;