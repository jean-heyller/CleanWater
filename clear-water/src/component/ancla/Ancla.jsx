/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox } from '@react-three/cannon';

export function Ancla({ onClick, ...props }) {
  const { nodes, materials } = useGLTF('/models-3d/ancla.gltf');
  const [ref, api] = useBox(() => ({
    mass: 1, // Masa inicial en 0 para evitar gravedad
    ...props,
  }));

  const handleClick = () => {
    console.log('Ancla clickeada');
    api.mass.set(1); // Cambia la masa a 1 para activar la gravedad
    api.velocity.set(0, -5, 0); // Asegura un movimiento hacia abajo
    if (onClick) onClick(); // Llama a la función onClick pasada como propiedad
  };

  useEffect(() => {
    // Asegura que la masa sea 0 al inicio
    api.mass.set(0);
  }, [api]);

  return (
    <group ref={ref} dispose={null} onClick={handleClick}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.186}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Ancla_Baked_0.geometry}
            material={materials.Baked}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={283.027}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/ancla.gltf');

export default Ancla;