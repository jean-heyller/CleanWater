import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Desert(props) {
  const { nodes, materials } = useGLTF('models/desert.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-86.455, 21.517, -4.399]} rotation={[Math.PI, -1.379, Math.PI]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.cactus.geometry}
              material={materials.senor}
              scale={0.933}
            />
          </group>
          <group
            position={[-75.167, 13.773, -7.437]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[22.166, 22.769, 22.166]}>
            <mesh
              name="River"
              castShadow
              receiveShadow
              geometry={nodes.River.geometry}
              material={materials.water}
              morphTargetDictionary={nodes.River.morphTargetDictionary}
              morphTargetInfluences={nodes.River.morphTargetInfluences}
              position={[0, 0, -0.009]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canyon_rocks.geometry}
            material={materials.rocks}
            position={[-61.745, 20.125, -3.249]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.palms_follaje.geometry}
            material={materials.foliage}
            position={[-64.118, 21.596, 0.251]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.canyon_skull.geometry}
            material={materials.skull}
            position={[-88.434, 17.576, -29.917]}
            rotation={[-0.467, -0.021, 0.384]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.rock_bottom.geometry}
            material={materials.rock_bottom}
            position={[-75.625, 8.311, -7.684]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.sand.geometry}
            material={materials.sand}
            position={[-75.625, 17.067, -7.767]}
            rotation={[-Math.PI / 2, 0, Math.PI / 2]}
            scale={[23.234, 22.049, 20.331]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eye2_ele_canyon_sun_0.geometry}
        material={materials.ele_canyon_sun}
        position={[9.251, -13.672, 172.781]}
        rotation={[1.986, -0.418, -3.017]}
        scale={0.913}
      />
    </group>
  )
}

useGLTF.preload('/desert.glb')

export default Desert;
