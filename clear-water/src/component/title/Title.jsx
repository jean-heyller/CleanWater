import React from "react";

const Title = ({ text }) => {
  return (
    <div className="mb-4">
      <h
        className="text-3xl font-extrabold font-custom text-white"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
      >
        {text}
      </h>
    </div>
  );
};

export default Title;
