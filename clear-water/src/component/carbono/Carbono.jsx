/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect, forwardRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const Carbono = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/carbono.gltf');
  const { actions } = useAnimations(animations, group);



  return (
    <group ref={ref || group} {...props} dispose={null} rotation={[Math.PI, 5, 0]}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="NurbsCircle001_0" rotation={[1.631, 0, 1.559]} scale={2.92}>
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials['Material.002']}
                />
              </group>
              <group name="Sphere008_1" position={[0.126, -0.059, 0.081]} scale={1.042}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials['Material.008']}
                />
              </group>
              <group name="NurbsCircle005_2" rotation={[2.982, 0.042, 1.6]} scale={4.304}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials['Material.005']}
                />
              </group>
              <group name="Sphere006_3" scale={0.31}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Sphere007_4" scale={0.31}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.material_0}
                />
              </group>
              <group name="Sphere009_5" position={[-0.133, -0.059, 7.924]} scale={1.042}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials['Material.012']}
                />
              </group>
              <group
                name="NurbsCircle011_6"
                position={[-0.258, 0, 7.843]}
                rotation={[-1.477, 0, 1.559]}
                scale={2.902}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials['Material.019']}
                />
              </group>
              <group name="Sphere010_7" position={[0.547, -0.059, -7.575]} scale={1.042}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials['Material.021']}
                />
              </group>
              <group
                name="NurbsCircle013_8"
                position={[0.422, 0, -7.656]}
                rotation={[1.631, 0, 1.559]}
                scale={2.92}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials['Material.014']}
                />
              </group>
              <group
                name="NurbsCircle017_9"
                position={[0.422, 0, -7.656]}
                rotation={[2.982, 0.042, 1.6]}
                scale={4.304}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials['Material.020']}
                />
              </group>
              <group
                name="NurbsCircle018_10"
                position={[-0.258, 0, 7.843]}
                rotation={[-1.549, 0.004, 1.509]}
                scale={4.304}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials['Material.022']}
                />
              </group>
              <group name="Sphere025_11" scale={0.31}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials['Material.042']}
                />
              </group>
              <group name="Sphere026_12" scale={0.31}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials['Material.043']}
                />
              </group>
              <group
                name="Sphere_13"
                position={[0.002, 2.9, 0.09]}
                rotation={[-1.477, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials['Material.003']}
                />
              </group>
              <group
                name="Sphere001_14"
                position={[0.002, -2.92, 0.007]}
                rotation={[1.631, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_32"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_32.geometry}
                  material={materials['Material.004']}
                />
              </group>
              <group
                name="Sphere002_15"
                position={[-0.005, 2.335, 3.615]}
                rotation={[-0.511, -0.005, 1.509]}
                scale={0.31}>
                <mesh
                  name="Object_34"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_34.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name="Sphere003_16"
                position={[-0.275, 0.04, 4.295]}
                rotation={[0.054, -0.067, 1.529]}
                scale={0.31}>
                <mesh
                  name="Object_36"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials['Material.035']}
                />
              </group>
              <group
                name="Sphere004_17"
                position={[0.171, -0.947, -4.195]}
                rotation={[2.982, 0.042, 1.6]}
                scale={0.31}>
                <mesh
                  name="Object_38"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_38.geometry}
                  material={materials['Material.031']}
                />
              </group>
              <group
                name="Sphere005_18"
                position={[0.171, 1.329, -4.09]}
                rotation={[-2.765, 0.042, 1.6]}
                scale={0.31}>
                <mesh
                  name="Object_40"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_40.geometry}
                  material={materials['Material.029']}
                />
              </group>
              <group
                name="Sphere017_19"
                position={[-0.088, -0.947, 3.648]}
                rotation={[2.982, 0.042, 1.6]}
                scale={0.31}>
                <mesh
                  name="Object_42"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials['Material.036']}
                />
              </group>
              <group
                name="Sphere018_20"
                position={[-0.088, 1.329, 3.753]}
                rotation={[-2.765, 0.042, 1.6]}
                scale={0.31}>
                <mesh
                  name="Object_44"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_44.geometry}
                  material={materials['Material.034']}
                />
              </group>
              <group
                name="Sphere019_21"
                position={[-0.534, 0.04, 12.138]}
                rotation={[0.054, -0.067, 1.529]}
                scale={0.31}>
                <mesh
                  name="Object_46"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials['Material.039']}
                />
              </group>
              <group
                name="Sphere020_22"
                position={[-0.225, 4.3, 7.667]}
                rotation={[-1.549, 0.004, 1.509]}
                scale={0.31}>
                <mesh
                  name="Object_48"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_48.geometry}
                  material={materials['Material.037']}
                />
              </group>
              <group
                name="Sphere021_23"
                position={[-0.256, -2.92, 7.85]}
                rotation={[1.631, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_50"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_50.geometry}
                  material={materials['Material.040']}
                />
              </group>
              <group
                name="Sphere022_24"
                position={[-0.256, 2.9, 7.933]}
                rotation={[-1.477, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_52"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials['Material.038']}
                />
              </group>
              <group
                name="Sphere027_25"
                position={[-0.28, -4.281, 8.286]}
                rotation={[1.53, -0.001, 1.633]}
                scale={0.31}>
                <mesh
                  name="Object_54"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_54.geometry}
                  material={materials['Material.050']}
                />
              </group>
              <group
                name="Sphere028_26"
                position={[-0.496, 2.348, 11.441]}
                rotation={[-0.515, -0.058, 1.53]}
                scale={0.31}>
                <mesh
                  name="Object_56"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials['Material.049']}
                />
              </group>
              <group
                name="Sphere011_27"
                position={[0.424, 2.9, -7.566]}
                rotation={[-1.477, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_58"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_58.geometry}
                  material={materials['Material.027']}
                />
              </group>
              <group
                name="Sphere012_28"
                position={[0.424, -2.92, -7.65]}
                rotation={[1.631, 0, 1.559]}
                scale={0.31}>
                <mesh
                  name="Object_60"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials['Material.032']}
                />
              </group>
              <group
                name="Sphere013_29"
                position={[0.416, 2.281, -4.007]}
                rotation={[-0.496, -0.005, 1.509]}
                scale={0.31}>
                <mesh
                  name="Object_62"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_62.geometry}
                  material={materials['Material.028']}
                />
              </group>
              <group
                name="Sphere014_30"
                position={[0.146, 0.04, -3.362]}
                rotation={[0.054, -0.067, 1.529]}
                scale={0.31}>
                <mesh
                  name="Object_64"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials['Material.030']}
                />
              </group>
              <group
                name="Sphere015_31"
                position={[0.545, 4.275, -7.181]}
                rotation={[-1.397, 0.024, 1.5]}
                scale={0.31}>
                <mesh
                  name="Object_66"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_66.geometry}
                  material={materials['Material.026']}
                />
              </group>
              <group
                name="Sphere016_32"
                position={[0.593, -0.947, -11.851]}
                rotation={[2.982, 0.042, 1.6]}
                scale={0.31}>
                <mesh
                  name="Object_68"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_68.geometry}
                  material={materials['Material.033']}
                />
              </group>
              <group
                name="Sphere023_33"
                position={[0.586, 3.164, -10.569]}
                rotation={[-2.252, 0.038, 1.563]}
                scale={0.31}>
                <mesh
                  name="Object_70"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials['Material.025']}
                />
              </group>
              <group
                name="Sphere024_34"
                position={[0.366, -4.301, -7.509]}
                rotation={[1.599, -0.011, 1.603]}
                scale={0.31}>
                <mesh
                  name="Object_72"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials['Material.041']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload('/models-3d/carbono.gltf');

export default Carbono;