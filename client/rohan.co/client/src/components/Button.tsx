import React from "react";

interface ButtonProps {
  color?: string;
  textColor?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  color = "blue",
  textColor = "white",
  onClick,
  children,
  className = "",
}: ButtonProps) {
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
