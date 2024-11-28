import React, { useState } from "react";

const ProblemText = ({ selectedProblem, data }) => {
  const [showSolution, setShowSolution] = useState(false);

  if (!data) return null; // No renderizar nada si data es null
  
  const { title, description, solution } = data;

  const handleButtonClick = () => {
    setShowSolution(!showSolution);
  };

  return (
    selectedProblem && (
      <div className="absolute top-0 left-0 w-full bg-black/85 text-white p-4 border-b border-gray-300 shadow-lg">
        <span className="text-blue-500 font-bold">{showSolution ? "Solución" :title}: </span>
        <span className="text-white"> {showSolution ? solution : description}</span>
        <div className="mt-4 flex justify-center">
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
          >
            {showSolution ? "Regresar" : "Solución"}
          </button>
        </div>
      </div>
    )
  );
};

export default ProblemText;
