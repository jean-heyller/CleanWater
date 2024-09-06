import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCanvasParemeterStore } from "../../stores/use-canvas-parameter-store";
import { FlyControls, OrbitControls } from "@react-three/drei";
import { Sphere } from "../../component/Sphere";

export const World = () => {
  const { cameraSettings, intensityAmbientLight, position, intensityDirectionalLight } = useCanvasParemeterStore();
  const cameraRef = useRef();

   
  return(
    <>
        <Canvas camera ={cameraSettings}>
          <OrbitControls
            movementSpeed={10}
            rollSpeed={0.5}
            dragToLook={true}
          />
          <ambientLight intensity={intensityAmbientLight}/>
          <directionalLight position={position} intensity={intensityDirectionalLight}/>
          <Sphere/>
        </Canvas>
    </>  
  ) 
};
