import React, { useState } from "react";
import CatSprite from "./CatSprite";
import Icon from "./Icon";
import { ActionContext } from "../contexts/actionContexts";

export default function PreviewArea() {
  const previewAreaRef = React.useRef(null);
  const catSpriteRef = React.useRef(null);
  const { catPosition, setCatPosition } = React.useContext(ActionContext);
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setIsDragging(true);
    const offsetX = event.clientX - catPosition.x;
    const offsetY = event.clientY - catPosition.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const containerRect = previewAreaRef.current.getBoundingClientRect();
    const spriteRect = catSpriteRef.current.getBoundingClientRect();

    const maxX = containerRect.width - spriteRect.width;
    const maxY = containerRect.height - spriteRect.height;

    let x = event.clientX - offset.x;
    let y = event.clientY - offset.y;

    // Restrict x and y within the bounds of the container
    x = Math.max(0, Math.min(maxX, x));
    y = Math.max(0, Math.min(maxY, y));

    setCatPosition({
      ...catPosition,
      x,
      y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full p-2"
      ref={previewAreaRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className="relative w-full bg-gray-200 p-1 mb-1">
        <Icon name="flag" size={30} className="text-green-600 mx-2" />
      </div>

      <div
        className="absolute"
        style={{
          transform: `translate(${catPosition.x}px, ${catPosition.y}px) rotate(${catPosition.rotation}deg)`,
          cursor: isDragging ? "grabbing" : "grab",
          opacity: catPosition.hidden ? 0 : 1,
        }}
        onMouseDown={handleMouseDown}
        ref={catSpriteRef}
      >
        <CatSprite />
      </div>
    </div>
  );
}
