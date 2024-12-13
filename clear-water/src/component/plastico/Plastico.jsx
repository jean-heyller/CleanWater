/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react';
import { useGLTF } from "@react-three/drei";
import { useBox } from '@react-three/cannon';

export function Plastico({ onClick, ...props }) {
  const { nodes, materials } = useGLTF("/models-3d/plastico-basura.gltf");

  const [ref, api] = useBox(() => ({
    mass: 1, // Masa inicial en 0 para evitar gravedad
    ...props,
  }));

  const handleClick = () => {
    console.log("Plastico clickeado");
    api.mass.set(1); // Cambia la masa a 1 para activar la gravedad
    api.velocity.set(0, -5, 0); // Asegura un movimiento hacia abajo
    if (onClick) onClick(); // Llama a la función onClick pasada como propiedad
  };

  useEffect(() => {
    // Asegura que la masa sea 0 al inicio
    api.mass.set(0);
  }, [api]);

  return (
    <group ref={ref} {...props} dispose={null} onClick={handleClick}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0001.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0002.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0003.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0004.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0005.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0006.geometry}
          material={materials.other}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0007.geometry}
          material={materials.other}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/plastico-basura.gltf");

export default Plastico;