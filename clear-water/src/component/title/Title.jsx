import React from "react";

const Title = ({ text, color, fontSize }) => {
  const textColorClass = color === "white" ? "text-white" : "text-black";
  const fontSizeClass = fontSize === "small" ? "text-2xl" : "text-3xl";
  return (
    <div className="mb-4">
      <h2
        className={`${fontSizeClass} font-extrabold font-custom ${textColorClass}`}
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
      >
        {text}
      </h2>
    </div>
  );
};

export default Title;
