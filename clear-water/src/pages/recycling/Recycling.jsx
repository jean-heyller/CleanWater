import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import React from 'react';
import { TextureLoader, RepeatWrapping } from 'three';
import { OrbitControls, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { useEffect } from 'react';

const Bubble = () => {
  const bubbleRef = useRef();
  const [positionY, setPositionY] = useState(-1);

  useEffect(() => {
    bubbleRef.current.position.y = positionY;
    bubbleRef.current.position.x = Math.random() * 30 - 15;
    bubbleRef.current.position.z = Math.random() * 30 - 15;
  }, []);

  useFrame(() => {
    if (bubbleRef.current) {
      const newY = positionY + 0.01;
      setPositionY(newY);
      bubbleRef.current.position.y = newY;

      if (newY > 15) {
        setPositionY(-1);
        bubbleRef.current.position.x = Math.random() * 30 - 15;
        bubbleRef.current.position.z = Math.random() * 30 - 15;
      }
    }
  });

  return (
    <mesh ref={bubbleRef}>
      <sphereGeometry args={[0.5, 16, 16]} /> 
      <meshStandardMaterial color="lightblue" transparent opacity={0.8} />
    </mesh>
  );
};


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
      maxDistance={30}
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

const OceanAcidificationText = () => {
  const text = `La acidificación del océano es un fenómeno que ocurre 
cuando el agua del mar absorbe dióxido de carbono (CO2) 
de la atmósfera, lo que provoca una disminución en el pH 
del agua. Este proceso afecta gravemente a los ecosistemas 
marinos, ya que organismos como los corales y los moluscos 
dependen de un ambiente más alcalino para formar sus 
estructuras calcáreas. Con la reducción del pH, estos 
organismos se debilitan, lo que altera la cadena alimentaria 
y afecta a la biodiversidad marina. La acidificación es 
una consecuencia directa del cambio climático y requiere 
una acción urgente para mitigar su impacto en los océanos.`;

  const positionX = -5;  
  const positionZ = -50; 
  return (
    <>
      <mesh position={[positionX, 17, positionZ]}>
        <planeGeometry args={[60, 29]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      <Text
        position={[positionX, 17, -45]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        lineHeight={1.2}
      >
        {text}
      </Text>
    </>
  );
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
      <OceanAcidificationText />
      {Array.from({ length: 20 }).map((_, index) => (
        <Bubble key={index} />
      ))}
      <CameraController />
    </Canvas>
  );
};

export default Scene;
