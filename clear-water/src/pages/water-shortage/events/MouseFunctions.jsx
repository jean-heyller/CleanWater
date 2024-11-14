import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useProblemStore } from "../../../stores/store-problem-selected";

const positions = ["NOT_PROBLEM_SELECTED", "PROBLEM_1", "PROBLEM_2", "PROBLEM_3"];

const MouseFunctions = ({ children, handleSelectedProblem }) => {
  const [currentPositionIndex, setCurrentPositionIndex] = useState(0);
  const { setProblem } = useProblemStore();

  const handleWheel = (event) => {
    const delta = event.deltaY;
    let newIndex = currentPositionIndex;

    if (delta > 0) {
      newIndex = (currentPositionIndex + 1) % positions.length;
    } else {
      newIndex = (currentPositionIndex - 1 + positions.length) % positions.length;
    }

    setCurrentPositionIndex(newIndex);
    setProblem(positions[newIndex]);
    handleSelectedProblem(positions[newIndex]);
  };

  return (
    <Canvas
      shadows
      camera={{ position: [0, 2, 4], fov: 35 }}
      onWheel={handleWheel}
    >
      {children}
    </Canvas>
  );
};

export default MouseFunctions;
