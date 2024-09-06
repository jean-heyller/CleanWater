import { create } from "zustand"

export const useCanvasParemeterStore = create((set) => ({
    cameraSettings: {
        position: [2, 1, 5],
        fov: 45,
      },
    intensityAmbientLight: 1.5,
    position: [0, 10, 10],
    intensityDirectionalLight: 5,
    sphereArgs: [0.3, 32, 32],
    initialPosition: { x: -5, y: 0, z: 0 }
}))
