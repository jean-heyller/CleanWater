/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Physics, useBox } from '@react-three/cannon';
import Solution from "../../component/solution/Solution";

const SolutionGarbage = () => {
  const solutionRef = useRef();
  const [ref] = useBox(() => ({ mass: 1, position: [0, -15, 0] }));

  const handlePlayAnimations = () => {
    if (solutionRef.current) {
      solutionRef.current.playAnimations();
    }
  };

  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <h1>Solution Garbage</h1>
      <button onClick={handlePlayAnimations}>Play Animations</button>
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls />
        <Physics>
          <mesh ref={ref}>
            <Solution ref={solutionRef} position={[0, -15, 0]} />
          </mesh>
        </Physics>
      </Canvas>
    </div>
  );
};

export default SolutionGarbage;