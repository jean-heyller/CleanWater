import { Vector3 } from "three";
import { create } from "zustand";

export const useTypeStore = create((set) => ({
  typeProblem: {
    name: "NOT_TYPE_SELECTED",
    positionCamera: new Vector3(0, 1, 4),
  },

  setType: (typeProblem) =>
    set({
      typeProblem: typeProblem,
    }),
}));
