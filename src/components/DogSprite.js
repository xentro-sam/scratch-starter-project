import React from "react";

export default function DogSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      version="1.1"
      xmlSpace="preserve"
    >
      <g>
        {/* Body */}
        <ellipse cx="50" cy="60" rx="35" ry="50" fill="#FFAB19" />

        {/* Head */}
        <circle cx="50" cy="30" r="25" fill="#FFAB19" />

        {/* Ears */}
        <ellipse cx="35" cy="20" rx="10" ry="15" fill="#FFAB19" />
        <ellipse cx="65" cy="20" rx="10" ry="15" fill="#FFAB19" />

        {/* Eyes */}
        <circle cx="42" cy="28" r="4" fill="#001026" />
        <circle cx="58" cy="28" r="4" fill="#001026" />

        {/* Nose */}
        <circle cx="50" cy="33" r="3" fill="#001026" />

        {/* Mouth */}
        <path
          d="M 48 40 Q 50 43 52 40"
          fill="none"
          stroke="#001026"
          strokeWidth="1.2"
        />

        {/* Legs */}
        <ellipse cx="40" cy="85" rx="15" ry="10" fill="#FFAB19" />
        <ellipse cx="60" cy="85" rx="15" ry="10" fill="#FFAB19" />

        {/* Tail */}
        <path
          d="M 80 55 Q 95 40 80 25"
          fill="#FFAB19"
          stroke="#001026"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );
}
