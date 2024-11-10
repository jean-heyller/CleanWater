import { Vector3 } from "three";
import { create } from "zustand";

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
export const useProblemStore = create((set) => ({
    /**
   * Initial state with 'NOT_PROBLEM_SELECTED' as the default problem position
   * and a default problem+ position.
   * @type {ProblemState}
   */
  problem: {
    name: "NOT_PROBLEM_SELECTED",
    positionCamera: new Vector3(30, 5, -30),
  },
  /**
   * Setter function to update the selected problem state.
   * @param {ProblemState} problem - The new problem object to set.
   */
  setSign: (problem) =>
    set({
      problem: problem,
    }),
}));
