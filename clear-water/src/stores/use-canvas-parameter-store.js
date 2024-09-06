import { create } from "zustand"

export const useCanvasParemeterStore = create((set) => ({
    cameraSettings: {
        position: [2, 1, 5],
        fov: 45,
      },
    intensityAmbientLight: 1.5,
    position: [0, 10, 10],
    intensityDirectionalLight: 5,
    sphereArgs: [2, 32, 32]
}))
