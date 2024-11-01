/* eslint-disable react/no-unknown-property */
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Ocean3d(props) {
  const { nodes, materials } = useGLTF('/models/oceano-basura.gltf');
  return (
    <group {...props} dispose={null} scale={[0.33, 0.33, 0.33]}> {/* Ajusta la escala aquí */}
      <group position={[2.023, -4.682, 13.087]} rotation={[-Math.PI / 2, 0, 0]} scale={0.935}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Orange_Peel_GEO_OrganicWaste_0001.geometry}
            material={materials['OrganicWaste.001']}
            position={[0.184, 0, 0]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.MI_shhnouh}
        position={[87.565, -87.946, 130.486]}
        rotation={[2.827, 0.063, -3.114]}
        scale={[141.25, 145.864, 141.25]}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.173}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[314.792, 110.909, -61.34]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CAGE_bag_2_0.geometry}
              material={materials['bag_2.001']}
              position={[4.722, 3.774, 4.509]}
            />
          </group>
          <group position={[0, 127.847, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_TrashBin_0.geometry}
              material={materials['TrashBin.001']}
              position={[-5.876, -4.898, 1.425]}
              scale={0.926}
            />
          </group>
          <group
            position={[183.795, 88.337, 22.932]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 84.058]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Trashbag_LP_bag_3_0.geometry}
              material={materials['bag_3.001']}
              position={[9.853, 3.742, 4.033]}
            />
          </group>
          <group
            position={[181.358, 105.264, -141.596]}
            rotation={[-Math.PI / 2, 0, -2.788]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Trashbag_LP001_bag_one_0.geometry}
              material={materials['bag_one.001']}
              position={[5.792, -11.62, 1.695]}
            />
          </group>
          <group
            position={[-166.667, 105.264, 61.525]}
            rotation={[-Math.PI / 2, 0, 1.746]}
            scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Trashbag_LP002_bag_4_0.geometry}
              material={materials['bag_4.001']}
              position={[10.354, 13.875, -5.571]}
              scale={1.118}
            />
          </group>
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials['Material.001']}
        position={[7.302, -34.876, 5.329]}
        scale={438.675}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={15.408}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.314, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Banana_Peel_GEO_OrganicWaste_0.geometry}
              material={materials['OrganicWaste.002']}
              position={[-0.671, 2.194, -1.884]}
              scale={-5.528}
            />
          </group>
          <group position={[0.184, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Orange_Peel_GEO_OrganicWaste_0.geometry}
              material={materials['OrganicWaste.002']}
              position={[-1.103, 2.831, 0.536]}
              scale={-11.1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Apple_Rotten_GEO_OrganicWaste_0.geometry}
            material={materials['OrganicWaste.002']}
            position={[0.558, 0.011, 4.111]}
            scale={10.054}
          />
        </group>
      </group>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0.geometry}
          material={materials['other.001']}
          position={[10.774, 109.252, -65.98]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0001.geometry}
          material={materials['other.001']}
          position={[-58.818, -145.149, -38.232]}
          rotation={[0.081, -0.033, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0002.geometry}
          material={materials['other.001']}
          position={[-21.232, 2.791, 89.686]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0003.geometry}
          material={materials['other.001']}
          position={[91.683, 142.825, 66.927]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0004.geometry}
          material={materials['other.001']}
          position={[59.459, 97.798, 33.921]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0005.geometry}
          material={materials['other.001']}
          position={[-12.527, -135.069, 76.486]}
          rotation={[0, 0, 1.221]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0006.geometry}
          material={materials['other.001']}
          position={[87.582, -188.356, 56.614]}
          rotation={[0.218, -0.022, -2.024]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SculptLayer_Layer_1_0007.geometry}
          material={materials['other.001']}
          position={[-15.309, 61.897, 100.012]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/oceano-basura.gltf');

export default Ocean3d;