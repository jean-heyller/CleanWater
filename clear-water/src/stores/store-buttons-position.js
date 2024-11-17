import { create } from "zustand"

export const usePositionButtonStore = create((set) => ({

    positionButton1: { x: -0.9, y: 1, z: 0  },

    positionButton2: { x: 0.5, y: -1, z: 0 },

    positionButton3: { x: -0.9, y: -3, z: 0 },

    positionSoundButton:{ x: -7, y: 1.5, z: 0 },

    positionBox: { x: 0, y: -1, z: -0.1 },

}))