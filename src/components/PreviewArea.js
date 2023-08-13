import React, { useState } from "react";
import CatSprite from "./CatSprite";
import DogSprite from "./DogSprite";
import Icon from "./Icon";
import { ActionContext } from "../contexts/actionContexts";

export default function PreviewArea() {
  const previewAreaRef = React.useRef(null);
  const spriteRef = React.useRef(null);
  const { spritePosition, setSpritePosition } = React.useContext(ActionContext);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [sprite, setSprite] = useState("cat");

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const offsetX = event.clientX - spritePosition.x;
    const offsetY = event.clientY - spritePosition.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const containerRect = previewAreaRef.current.getBoundingClientRect();
    const spriteRect = spriteRef.current.getBoundingClientRect();

    const maxX = containerRect.width - spriteRect.width;
    const maxY = containerRect.height - spriteRect.height;

    let x = event.clientX - offset.x;
    let y = event.clientY - offset.y;

    // Restrict x and y within the bounds of the container
    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    setSpritePosition({
      ...spritePosition,
      x,
      y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleSpriteChange = (event) => {
    setSprite(event.target.value);
  };

  return (
    <div
      className="w-full p-2"
      ref={previewAreaRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative w-full bg-gray-200 p-1 mb-1 flex flex-wrap justify-between">
        <Icon name="flag" size={30} className="text-green-600 mx-2" />
        <div className="flex">
          <div className="mx-2">Select Sprite</div>
          <select
            className="rounded-md"
            onChange={handleSpriteChange}
            value={sprite}
          >
            <option value="cat">Cat</option>
            <option value="dog">Dog</option>
          </select>
        </div>
      </div>

      <div
        className="absolute"
        style={{
          transform: `translate(${spritePosition.x}px, ${spritePosition.y}px) rotate(${spritePosition.rotation}deg)`,
          cursor: isDragging ? "grabbing" : "grab",
          opacity: spritePosition.hidden ? 0 : 1,
        }}
        onMouseDown={handleMouseDown}
        ref={spriteRef}
      >
        {sprite === "cat" ? <CatSprite /> : <DogSprite />}
      </div>
    </div>
  );
}
