/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Fish3D(props) {
  const { nodes, materials } = useGLTF('/models/kai-fish.gltf');
  return (
    <group
      {...props}
      dispose={null}
      scale={[0.05, 0.05, 0.05]} 
      position={[-7, 0, 0]} 
      rotation={[0, Math.PI / 2, 0]} 
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LG_modelado_Pez_pubPez_body_LG_modelado_Pez_pubKoiSSS_Mtl_0.geometry}
        material={materials.LG_modelado_Pez_pubKoiSSS_Mtl}
      />
    </group>
  );
}

useGLTF.preload('/models/kai-fish.gltf');

export default Fish3D;