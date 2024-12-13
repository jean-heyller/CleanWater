/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Coral(props) {
  const { nodes, materials } = useGLTF('/models-3d/coral.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ufnxaczfa_LOD0_TIER3_000.geometry}
        material={materials.MI_ufnxaczfa}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/coral.gltf');

export default Coral;
