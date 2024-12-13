/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Bosque(props) {
  const { nodes, materials } = useGLTF('/models-3d/bosque.gltf')
  return (
    <group {...props} dispose={null}>
      <group
        position={[445.316, 464.65, 334.437]}
        rotation={[-1.562, -0.008, -2.832]}
        scale={55.474}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hojas_Material004_0.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hojas_Material004_0_1.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[246.261, 144.833, -432.932]}
        rotation={[-1.45, -0.004, -0.031]}
        scale={[21.636, 21.636, 23.287]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_pelo002_0.geometry}
          material={materials['pelo.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Piel002_0.geometry}
          material={materials['Piel.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Material007_0.geometry}
          material={materials['Material.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Material008_0.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Camisa001_0.geometry}
          material={materials['Camisa.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Material009_0.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Material006_0.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Principito_Botas003_0.geometry}
          material={materials['Botas.003']}
        />
      </group>
      <group
        position={[-7.828, 132.212, -168.349]}
        rotation={[-1.603, 0.006, -1.602]}
        scale={8.777}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zorro_Material011_0.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zorro_Material010_0.geometry}
          material={materials['Material.010']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zorro_Material000_0.geometry}
          material={materials['Material.000']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.zorro_Material005_0.geometry}
          material={materials['Material.005']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Caverna_Material001_0.geometry}
        material={materials['Material.001']}
        position={[6.43, 98.98, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={225.066}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pasto_Material003_0.geometry}
        material={materials['Material.003']}
        position={[0, 62.271, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={746.423}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tronco_Material002_0.geometry}
        material={materials['Material.002']}
        position={[498.852, 35.429, 266.67]}
        rotation={[-1.562, -0.008, -2.832]}
        scale={217.314}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/bosque.gltf');

export default Bosque;


