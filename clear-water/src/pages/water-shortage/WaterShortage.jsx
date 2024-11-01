import React from "react";
import { Canvas } from "@react-three/fiber";
import { useCanvasParemeterStore } from "../../stores/use-canvas-parameter-store";
import "../world/World.css";
import Desert from "../../component3D/desert/Desert";
import { OrbitControls } from "@react-three/drei";

const WaterShortage = () => {
  const {
    cameraSettings,
    intensityAmbientLight,
    position,
    intensityDirectionalLight,
  } = useCanvasParemeterStore();

  return (
    <div className="canvas-container">
      <Canvas camera={cameraSettings}>
        <ambientLight intensity={intensityAmbientLight} />
        <directionalLight
          position={position}
          intensity={intensityDirectionalLight}
        />
        <Desert />
        <OrbitControls movementSpeed={10} rollSpeed={0.5} dragToLook={true} />
      </Canvas>
    </div>
  );
};

export default WaterShortage;
