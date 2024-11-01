import { Canvas, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import React from 'react';
import { TextureLoader, RepeatWrapping } from 'three';
import { OrbitControls } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Floor = () => {
  const texture = useLoader(TextureLoader, '/texture/playa.jpg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-0.1} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshLambertMaterial map={texture} />
    </mesh>
  );
};

const Background = () => {
  const texture = useLoader(TextureLoader, '/texture/fondo_marino.jpg');

  return (
    <>
      <mesh position={[0, 130, -200]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-100, 130, -100]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[100, 130, -100]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

const CameraController = () => {
  const controlsRef = useRef();

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      maxPolarAngle={Math.PI / 2.5}
      minPolarAngle={Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      maxDistance={20}
      minDistance={5}
    />
  );
};

const FishModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models-3d/neon.glb');
  return <primitive object={scene} position={[0, 0, 0]} scale={[3, 3, 3]} castShadow />;
};

const PlantasModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models-3d/plantas.glb');
  return <primitive object={scene} position={[0, 0, 0]} scale={[8, 8, 8]} castShadow />;
};

const Scene = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [0, 10, 25], fov: 75 }} shadows>
      <ambientLight intensity={0.5} />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      <directionalLight 
        position={[-5, 10, 5]} 
        intensity={1} 
        castShadow 
        shadow-mapSize-width={1024} 
        shadow-mapSize-height={1024} 
      />
      <Background />
      <Floor />
      <FishModel />
      <PlantasModel />
      <CameraController />
    </Canvas>
  );
};

export default Scene;
