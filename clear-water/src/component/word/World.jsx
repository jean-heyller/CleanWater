/* eslint-disable react/no-unknown-property */

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function World(props) {
  const { nodes, materials } = useGLTF('/models-3d/little_planet_earth.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Clouds_2_Clouds_1.geometry}
        material={materials.Clouds}
        position={[0, 0, -500]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ocean_Mat_0.geometry}
        material={materials.material}
        position={[0, 0, -500]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CONT_Extrude_Mat3_0.geometry}
        material={materials['Mat.3']}
        position={[-64.303, 10.837, -5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SP_Extrude_Ice_0.geometry}
        material={materials.material_3}
        position={[0, 500, -500]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NP_Extrude_Ice_0.geometry}
        material={materials.material_3}
        position={[0, -500, -500]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/little_planet_earth.glb')

export default World