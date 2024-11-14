import React from "react";

const ProblemText = ({ selectedProblem, data }) => {
  if (!data) return null; // No renderizar nada si data es null
  
  const { title, description } = data;
  return (
    selectedProblem && (
      <div className="absolute top-0 left-0 w-full bg-black/85 text-white p-4 border-b border-gray-300 shadow-lg">
        <span className="text-blue-500 font-bold">{title}: </span>
        <span className="text-white"> {description}</span>
      </div>
    )
  );
};

export default ProblemText;
