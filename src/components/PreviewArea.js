import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea() {
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
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
    const x = event.clientX - offset.x;
    const y = event.clientY - offset.y;
    setCatPosition({ x, y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="w-full p-2"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="absolute"
        style={{
          transform: `translate(${catPosition.x}px, ${catPosition.y}px)`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        <CatSprite />
      </div>
    </div>
  );
}
