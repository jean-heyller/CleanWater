import React from "react";
import { Canvas } from "@react-three/fiber";
import { useCanvasParemeterStore } from "../../stores/use-canvas-parameter-store";
import { FlyControls } from "@react-three/drei";
import { Sphere } from "../../component/Sphere";
import "./World.css";

export const World = () => {
  const {
    cameraSettings,
    intensityAmbientLight,
    position,
    intensityDirectionalLight,
  } = useCanvasParemeterStore();

  return (
    <div className="canvas-container">
      <Canvas camera={cameraSettings}>
        <FlyControls movementSpeed={10} rollSpeed={0.5} dragToLook={true} />
        <ambientLight intensity={intensityAmbientLight} />
        <directionalLight
          position={position}
          intensity={intensityDirectionalLight}
        />
        <Sphere />
      </Canvas>
    </div>
  );
};
