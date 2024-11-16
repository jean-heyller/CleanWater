import { useEffect, useCallback, useState } from "react";
import { useKeyboardControls } from "@react-three/drei";
import { useProblemStore } from "../../../stores/store-problem-selected";

const KeyBoardsFunctions = ({ handleSelectedProblem }) => {
  const { setProblem } = useProblemStore();
  const [subscribeKeys] = useKeyboardControls();
  const problems = ["PROBLEM_1", "PROBLEM_2", "PROBLEM_3"];
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);

  const handleProblemChange = useCallback(
    (direction) => {
      setCurrentProblemIndex((prevIndex) => {
        let newIndex = prevIndex + direction;
        if (newIndex < 0) newIndex = problems.length - 1;
        if (newIndex >= problems.length) newIndex = 0;
        const selectedProblem = problems[newIndex];
        setProblem(selectedProblem);
        handleSelectedProblem(selectedProblem);
        return newIndex;
      });
    },
    [problems, setProblem, handleSelectedProblem]
  );

  const handleEscape = useCallback(() => {
    setProblem("NOT_PROBLEM_SELECTED");
    handleSelectedProblem(null);
  }, [setProblem, handleSelectedProblem]);

  useEffect(() => {
    const unsubscribeRight = subscribeKeys(
      (state) => state["Next_Problem"],
      (pressed) => {
        if (pressed) handleProblemChange(1);
      }
    );

    const unsubscribeLeft = subscribeKeys(
      (state) => state["Previous_Problem"],
      (pressed) => {
        if (pressed) handleProblemChange(-1);
      }
    );

    const unsubscribeEscape = subscribeKeys(
      (state) => state["Base"],
      (pressed) => {
        if (pressed) handleEscape();
      }
    );

    return () => {
      unsubscribeRight();
      unsubscribeLeft();
      unsubscribeEscape();
    };
  }, [subscribeKeys, handleProblemChange]);

  return null;
};

export default KeyBoardsFunctions;


