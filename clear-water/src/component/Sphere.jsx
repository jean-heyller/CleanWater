import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCanvasParemeterStore } from '../stores/use-canvas-parameter-store';

export const Sphere = () => {
  const { sphereArgs, initialPosition } = useCanvasParemeterStore();
  const meshRef = useRef();
  let elapsedTime = 0;
  

  useFrame((state, delta) => {
    elapsedTime += delta;
    const x = initialPosition.x + elapsedTime * (1/3.5); // Movimiento lineal en el eje X con desplazamiento inicial
    const y = initialPosition.y + Math.cos(elapsedTime) * (1/3.5); // Movimiento cosenoidal en el eje Y con desplazamiento inicial
    if (meshRef.current) {
      meshRef.current.position.set(x, y, initialPosition.z);
    }
  });

  return (
    <mesh ref={meshRef} position={[initialPosition.x, initialPosition.y, initialPosition.z]}>
      <sphereGeometry args={sphereArgs} />
      <meshLambertMaterial color="red" />
    </mesh>
  );
};