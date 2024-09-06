import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useCanvasParemeterStore } from '../stores/use-canvas-parameter-store';

export const Sphere = () => {
  const { sphereArgs } = useCanvasParemeterStore();
  const meshRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = Math.cos(t) * 5;
    const y = Math.cos(t) * 5;
    if (meshRef.current) {
      meshRef.current.position.set(x, y, 0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={sphereArgs} />
      <meshLambertMaterial color="red" />
    </mesh>
  );
};