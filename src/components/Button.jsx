import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-[#d22f6b]",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
