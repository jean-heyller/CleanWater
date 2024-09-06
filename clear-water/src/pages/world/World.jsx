import React from "react";
import { Canvas } from "@react-three/fiber";
import { useCanvasParemeterStore } from "../../stores/use-canvas-parameter-store";
import { OrbitControls } from "@react-three/drei";

export const World = () => {
  const { cameraSettings, intensityAmbientLight, position, intensityDirectionalLight, sphereArgs } = useCanvasParemeterStore();
  return(
    <>
        <Canvas camera ={cameraSettings}>
            <OrbitControls
              enablePan={true}
            />
            <ambientLight intensity={intensityAmbientLight}/>
            <directionalLight position={position} intensity={intensityDirectionalLight}/>
            <mesh>
              <sphereGeometry args={sphereArgs}/>
              <meshNormalMaterial color="hotpink"/>
            </mesh>
        </Canvas>
    </>  
  ) 
};
