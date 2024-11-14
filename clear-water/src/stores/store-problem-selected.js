import { Vector3 } from "three";
import { create } from "zustand";

const positions = {
  NOT_PROBLEM_SELECTED: new Vector3(30, 5, -30),
  PROBLEM_1: new Vector3(-3, 2, -3),
  PROBLEM_2: new Vector3(-5, -2, -30),
  PROBLEM_3: new Vector3(10, -10, -3),
};

const intermediatePosition = new Vector3(10, -3, -3);

/**
 * Zustand store for managing the selected problem state.
 * It initializes with a default problem object and provides a setter function to update it.
 *
 * @typedef {Object} ProblemState
 * @property {string} name - The name of the problem sign.
 * @property {Vector3} positionCamera - The position of the camera when the problem is selected.
 */

/**
 * Zustand hook for managing the selected problem state.
 * It initializes with a default problem object and provides a setter function to update it.
 *
 * @type {import('zustand').UseStore<ProblemState>}
 */
export const useProblemStore = create((set, get) => ({
  problem: {
    name: "NOT_PROBLEM_SELECTED",
    positionCamera: positions.NOT_PROBLEM_SELECTED,
  },
  setProblem: (name) => {
    const currentProblem = get().problem.name;
    if (name === "PROBLEM_3" && currentProblem !== "PROBLEM_3") {
      set({
        problem: { name, positionCamera: intermediatePosition },
      });
      setTimeout(() => {
        set({
          problem: { name, positionCamera: positions[name] },
        });
      }, 1000); // Ajusta el tiempo según sea necesario
    } else if (currentProblem === "PROBLEM_3" && name !== "PROBLEM_3") {
      set({
        problem: { name: "PROBLEM_3", positionCamera: intermediatePosition },
      });
      setTimeout(() => {
        set({
          problem: { name, positionCamera: positions[name] },
        });
      }, 1000); // Ajusta el tiempo según sea necesario
    } else {
      set({
        problem: { name, positionCamera: positions[name] },
      });
    }
  },
}));
