import { useCallback } from "react";
import { Html } from "@react-three/drei";
import { useProblemStore } from "../../../stores/store-problem-selected";

const ProblemsButtons = ({ handleOpenModal, isModalOpen, handleSelectedProblem }) => {
  const { setProblem } = useProblemStore();

  const handleProblemClick = useCallback(
    (name) => {
      setProblem(name);
      handleSelectedProblem(name);
    },
    [setProblem, handleSelectedProblem]
  );

  return (
    !isModalOpen && (
      <Html occlude position={[-20, 12, -15]}>
        <div
          className={`absolute right-9 flex flex-col items-center space-y-4 ${
            isModalOpen ? "pointer-events-none" : ""
          }`}
        >
          <button
            className="bg-violet-500/60 hover:bg-violet-700/50 text-white font-bold py-2 px-10 rounded"
            onClick={handleOpenModal}
          >
            Descripción
          </button>
          <button
            className="bg-green-500/60 hover:bg-green-700/50 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center "
            onClick={() => handleProblemClick("PROBLEM_1")}
          >
            1
          </button>
          <button
            className="bg-red-500/60 hover:bg-red-700/50 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => handleProblemClick("PROBLEM_2")}
          >
            2
          </button>
          <button
            className="bg-yellow-500/60 hover:bg-yellow-700/50 text-white font-bold w-12 h-12 rounded-full flex items-center justify-center"
            onClick={() => handleProblemClick("PROBLEM_3")}
          >
            3
          </button>
        </div>
      </Html>
    )
  );
};

export default ProblemsButtons;
