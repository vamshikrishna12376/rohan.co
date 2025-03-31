import React from "react";

export default function Button({ color = "blue", textColor = "white", onClick, children, className = "" }) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${className}`}
      style={{ backgroundColor: color, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
