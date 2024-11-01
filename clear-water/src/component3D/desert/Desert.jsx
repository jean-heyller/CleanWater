import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Desert(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/desert.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.065}>
          <group name="6a42d9dbc12c436aab25ce78cb19acbbfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Armature002"
                  position={[-69.179, 14.621, -9.199]}
                  rotation={[-Math.PI / 2, 0, 2.215]}
                  scale={0.032}
                />
                <group
                  name="Armature003"
                  position={[-67.237, 24.839, -10.877]}
                  rotation={[-1.396, -0.115, -2.936]}
                  scale={0.024}
                />
                <group
                  name="Armature004"
                  position={[-81.648, 21.853, -26.075]}
                  rotation={[-1.541, -0.117, -2.551]}
                  scale={0.046}>
                  <group name="Object_5">
                    <skinnedMesh
                      name="Object_100"
                      geometry={nodes.Object_100.geometry}
                      material={materials['birds.001']}
                      skeleton={nodes.Object_100.skeleton}
                    />
                    <group
                      name="Object_101"
                      position={[-81.648, 21.853, -26.075]}
                      rotation={[-1.541, -0.117, -2.551]}
                      scale={0.046}
                    />
                    <skinnedMesh
                      name="Object_102"
                      geometry={nodes.Object_102.geometry}
                      material={materials['birds.001']}
                      skeleton={nodes.Object_102.skeleton}
                    />
                    <group
                      name="Object_99"
                      position={[-81.792, 22.877, -26.076]}
                      rotation={[-1.541, -0.117, -2.551]}
                      scale={0.046}
                    />
                    <primitive object={nodes._rootJoint} />
                  </group>
                </group>
                <group
                  name="Armature005"
                  position={[-80.024, 19.572, -22.381]}
                  rotation={[-Math.PI / 2, 0, -0.959]}
                  scale={0.062}>
                  <group name="Object_106">
                    <group
                      name="Object_200"
                      position={[-80.066, 20.974, -22.349]}
                      rotation={[-Math.PI / 2, 0, -0.959]}
                      scale={0.062}
                    />
                    <skinnedMesh
                      name="Object_201"
                      geometry={nodes.Object_201.geometry}
                      material={materials['birds.001']}
                      skeleton={nodes.Object_201.skeleton}
                    />
                    <group
                      name="Object_202"
                      position={[-80.024, 19.572, -22.381]}
                      rotation={[-Math.PI / 2, 0, -0.959]}
                      scale={0.062}
                    />
                    <skinnedMesh
                      name="Object_203"
                      geometry={nodes.Object_203.geometry}
                      material={materials['birds.001']}
                      skeleton={nodes.Object_203.skeleton}
                    />
                    <primitive object={nodes._rootJoint_1} />
                  </group>
                </group>
                <group
                  name="bismo_big"
                  position={[-69.179, 14.621, -9.199]}
                  rotation={[-Math.PI / 2, 0, 2.215]}
                  scale={0.032}
                />
                <group
                  name="canyon_animal_vulture_wings001"
                  position={[-81.792, 22.877, -26.076]}
                  rotation={[-1.541, -0.117, -2.551]}
                  scale={0.046}
                />
                <group
                  name="canyon_animal_vulture_wings002"
                  position={[-80.065, 20.974, -22.349]}
                  rotation={[-Math.PI / 2, 0, -0.959]}
                  scale={0.062}
                />
                <group name="canyon_deco_stone_small01" position={[-61.745, 20.125, -3.249]}>
                  <mesh
                    name="canyon_rocks"
                    castShadow
                    receiveShadow
                    geometry={nodes.canyon_rocks.geometry}
                    material={materials.rocks}
                  />
                </group>
                <group name="canyon_foliage01_leaves" position={[-64.118, 21.596, 0.251]}>
                  <mesh
                    name="palms_follaje"
                    castShadow
                    receiveShadow
                    geometry={nodes.palms_follaje.geometry}
                    material={materials.foliage}
                  />
                </group>
                <group name="canyon_skull_jaw" position={[-235.456, -19.037, -9.606]}>
                  <mesh
                    name="canyon_skull_jaw001"
                    castShadow
                    receiveShadow
                    geometry={nodes.canyon_skull_jaw001.geometry}
                    material={materials['Default-Material.001']}
                  />
                </group>
                <group
                  name="canyon_skull_lhorn"
                  position={[-88.434, 17.576, -29.917]}
                  rotation={[-0.467, -0.021, 0.384]}>
                  <mesh
                    name="canyon_skull"
                    castShadow
                    receiveShadow
                    geometry={nodes.canyon_skull.geometry}
                    material={materials.skull}
                  />
                </group>
                <group name="canyon_skull_lhorn_stump" position={[-235.456, -19.037, -9.606]}>
                  <mesh
                    name="canyon_skull_horn"
                    castShadow
                    receiveShadow
                    geometry={nodes.canyon_skull_horn.geometry}
                    material={materials.skull}
                  />
                </group>
                <group name="canyon_sun01" position={[-104.258, 19.976, 22.617]} />
                <group
                  name="canyonl_animal_vulture_body"
                  position={[-81.648, 21.853, -26.075]}
                  rotation={[-1.541, -0.117, -2.551]}
                  scale={0.046}
                />
                <group
                  name="canyonl_animal_vulture_body001"
                  position={[-80.024, 19.572, -22.381]}
                  rotation={[-Math.PI / 2, 0, -0.959]}
                  scale={0.062}
                />
                <group
                  name="Cone010"
                  position={[-86.455, 21.517, -4.399]}
                  rotation={[Math.PI, -1.379, Math.PI]}>
                  <mesh
                    name="cactus"
                    castShadow
                    receiveShadow
                    geometry={nodes.cactus.geometry}
                    material={materials.senor}
                    scale={0.933}
                  />
                </group>
                <group
                  name="Cube003"
                  position={[-75.625, 8.311, -7.684]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="Cube003_rock_bottom_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube003_rock_bottom_0.geometry}
                    material={materials.rock_bottom}
                  />
                </group>
                <group
                  name="Field"
                  position={[-67.237, 26.168, -17.087]}
                  rotation={[-2.493, -0.722, -0.599]}
                />
                <group
                  name="Field001"
                  position={[-86.969, 32.431, 6.963]}
                  rotation={[-Math.PI / 2, 0, 0]}
                />
                <group
                  name="gl_keycrate02"
                  position={[-68.914, 23.253, -8.98]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.019}
                />
                <group name="particle000" position={[-95.937, 21.642, -2.097]} scale={0}>
                  <mesh
                    name="particle000_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle000_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -131072]}
                  />
                </group>
                <group
                  name="particle001"
                  position={[-73.801, 20.953, 9.195]}
                  rotation={[-0.051, -0.028, 2.208]}
                  scale={0.022}>
                  <mesh
                    name="particle001_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle001_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle002"
                  position={[-75.969, 14.593, -33.215]}
                  rotation={[-2.419, 0.969, 1.209]}
                  scale={0.103}>
                  <mesh
                    name="particle002_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle002_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle003"
                  position={[-91.37, 14.142, 15.254]}
                  rotation={[0.871, 0.47, 0.16]}
                  scale={0.184}>
                  <mesh
                    name="particle003_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle003_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle004"
                  position={[-62.591, 18.495, -11.515]}
                  rotation={[-1.05, -0.579, 3.08]}
                  scale={0.256}>
                  <mesh
                    name="particle004_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle004_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle005"
                  position={[-82.446, 20.567, -22.946]}
                  rotation={[1.39, -1.117, 1.149]}
                  scale={0.291}>
                  <mesh
                    name="particle005_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle005_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle006"
                  position={[-72.566, 20.648, 7.218]}
                  rotation={[2.807, -1.228, 0.132]}
                  scale={0.325}>
                  <mesh
                    name="particle006_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle006_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle007"
                  position={[-85.343, 21.077, -19.979]}
                  rotation={[0.544, 0.621, 2.438]}
                  scale={0.359}>
                  <mesh
                    name="particle007_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle007_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle008"
                  position={[-62.532, 14.737, 15.592]}
                  rotation={[0.887, 0.207, -0.163]}
                  scale={0.394}>
                  <mesh
                    name="particle008_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle008_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle009"
                  position={[-93.516, 21.259, -1.057]}
                  rotation={[0.963, -0.923, 1.75]}
                  scale={0.428}>
                  <mesh
                    name="particle009_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle009_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle010"
                  position={[-80.009, 20.268, 10.691]}
                  rotation={[2.832, -0.171, -1.595]}
                  scale={0.462}>
                  <mesh
                    name="particle010_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle010_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle011"
                  position={[-98.691, 19.874, -27.477]}
                  rotation={[2.926, 0.321, -0.634]}
                  scale={0.497}>
                  <mesh
                    name="particle011_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle011_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle012"
                  position={[-97.146, 21.176, 1.342]}
                  rotation={[-0.448, 0.438, 1.809]}
                  scale={0.531}>
                  <mesh
                    name="particle012_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle012_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle013"
                  position={[-80.701, 19.586, -7.731]}
                  rotation={[1.404, -0.023, 0.283]}
                  scale={0.565}>
                  <mesh
                    name="particle013_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle013_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle014"
                  position={[-62.912, 20.755, 10.815]}
                  rotation={[2.303, -0.762, 0.979]}
                  scale={0.6}>
                  <mesh
                    name="particle014_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle014_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle015"
                  position={[-70.311, 19.437, -27.35]}
                  rotation={[-0.199, 0.397, 2.443]}
                  scale={0.634}>
                  <mesh
                    name="particle015_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle015_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle016"
                  position={[-92.611, 21.572, -8.124]}
                  rotation={[-2.827, 0.631, 0.111]}
                  scale={0.668}>
                  <mesh
                    name="particle016_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle016_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle017"
                  position={[-55.71, 18.665, 1.41]}
                  rotation={[1.302, 0.432, 0.026]}
                  scale={0.703}>
                  <mesh
                    name="particle017_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle017_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle018"
                  position={[-96.202, 19.044, -14.176]}
                  rotation={[-2.437, 0.482, -2.899]}
                  scale={0.737}>
                  <mesh
                    name="particle018_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle018_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle019"
                  position={[-82.985, 19.596, 10.334]}
                  rotation={[1.632, 0.423, -2.945]}
                  scale={0.771}>
                  <mesh
                    name="particle019_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle019_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle020"
                  position={[-56.46, 20.922, -5.005]}
                  rotation={[-0.744, 0.164, 0.687]}
                  scale={0.805}>
                  <mesh
                    name="particle020_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle020_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle021"
                  position={[-94.095, 18.733, -20.963]}
                  rotation={[-3.01, 0.282, -1.008]}
                  scale={0.84}>
                  <mesh
                    name="particle021_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle021_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle022"
                  position={[-55.524, 19.835, 6.472]}
                  rotation={[0.778, 0.348, 0.333]}
                  scale={0.874}>
                  <mesh
                    name="particle022_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle022_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle023"
                  position={[-57.538, 18.076, -18.674]}
                  rotation={[-1.723, 1.165, 2.529]}
                  scale={0.908}>
                  <mesh
                    name="particle023_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle023_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle024"
                  position={[-89.443, 20.545, -19.723]}
                  rotation={[-3.039, -0.881, 2.877]}
                  scale={0.943}>
                  <mesh
                    name="particle024_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle024_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle025"
                  position={[-85.937, 21.114, -3.41]}
                  rotation={[0.232, -0.753, -2.819]}
                  scale={0.977}>
                  <mesh
                    name="particle025_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle025_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle026"
                  position={[-84.469, 20.874, -4.451]}
                  rotation={[0.741, -0.109, 1.957]}
                  scale={0.994}>
                  <mesh
                    name="particle026_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle026_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle027"
                  position={[-92.65, 20.831, 0.642]}
                  rotation={[-1.942, -1.131, 2.042]}
                  scale={0.974}>
                  <mesh
                    name="particle027_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle027_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle028"
                  position={[-94.267, 21.064, -4.151]}
                  rotation={[2.876, -0.921, -2.805]}
                  scale={0.955}>
                  <mesh
                    name="particle028_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle028_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle029"
                  position={[-75.977, 19.358, -22.266]}
                  rotation={[2.062, -0.574, -0.243]}
                  scale={0.935}>
                  <mesh
                    name="particle029_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle029_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle030"
                  position={[-91.353, 17.695, -21.021]}
                  rotation={[0.748, -0.372, 2.375]}
                  scale={0.916}>
                  <mesh
                    name="particle030_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle030_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle031"
                  position={[-69.979, 19.852, 6.359]}
                  rotation={[-2.844, 0.425, 0.219]}
                  scale={0.896}>
                  <mesh
                    name="particle031_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle031_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle032"
                  position={[-53.201, 13.898, 13.214]}
                  rotation={[2.609, 0.357, -0.942]}
                  scale={0.877}>
                  <mesh
                    name="particle032_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle032_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle033"
                  position={[-98.956, 13.615, -0.434]}
                  rotation={[-2.133, -0.031, 3.057]}
                  scale={0.857}>
                  <mesh
                    name="particle033_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle033_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle034"
                  position={[-93.917, 20.261, -7.949]}
                  rotation={[-2.994, -0.301, 2.324]}
                  scale={0.837}>
                  <mesh
                    name="particle034_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle034_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle035"
                  position={[-64.288, 18.285, -4.926]}
                  rotation={[-0.822, 0.48, -2.344]}
                  scale={0.818}>
                  <mesh
                    name="particle035_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle035_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle036"
                  position={[-95.43, 19.285, -8.451]}
                  rotation={[2.683, 1.395, 3.046]}
                  scale={0.798}>
                  <mesh
                    name="particle036_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle036_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle037"
                  position={[-63.041, 16.422, -28.646]}
                  rotation={[2.769, -0.926, -2.996]}
                  scale={0.779}>
                  <mesh
                    name="particle037_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle037_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle038"
                  position={[-63.996, 21.083, 10.526]}
                  rotation={[-2.131, -0.688, -0.017]}
                  scale={0.759}>
                  <mesh
                    name="particle038_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle038_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle039"
                  position={[-95.792, 18.332, -13.01]}
                  rotation={[2.183, 1.222, -0.378]}
                  scale={0.74}>
                  <mesh
                    name="particle039_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle039_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle040"
                  position={[-87.155, 20.164, -20.473]}
                  rotation={[1.241, -1.238, 2.835]}
                  scale={0.72}>
                  <mesh
                    name="particle040_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle040_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle041"
                  position={[-64.687, 19.418, 1.335]}
                  rotation={[1.424, 0.094, -0.21]}
                  scale={0.701}>
                  <mesh
                    name="particle041_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle041_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle042"
                  position={[-64.006, 13.431, 16.105]}
                  rotation={[-1.085, -0.168, -3.034]}
                  scale={0.681}>
                  <mesh
                    name="particle042_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle042_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle043"
                  position={[-56.65, 19.516, 11.87]}
                  rotation={[0.632, 0.705, -2.979]}
                  scale={0.662}>
                  <mesh
                    name="particle043_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle043_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle044"
                  position={[-82.084, 20.376, -11.264]}
                  rotation={[-1.723, 0.883, 1.759]}
                  scale={0.642}>
                  <mesh
                    name="particle044_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle044_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle045"
                  position={[-77.001, 19.013, -19.329]}
                  rotation={[-0.433, -0.011, 3.012]}
                  scale={0.623}>
                  <mesh
                    name="particle045_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle045_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle046"
                  position={[-78.173, 18.431, 9.658]}
                  rotation={[-2.696, -0.369, -2.554]}
                  scale={0.603}>
                  <mesh
                    name="particle046_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle046_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle047"
                  position={[-77.527, 18.675, 10.022]}
                  rotation={[-1.955, -1.133, -0.138]}
                  scale={0.584}>
                  <mesh
                    name="particle047_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle047_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle048"
                  position={[-55.532, 19.934, -7.216]}
                  rotation={[0.98, 0.146, 0.641]}
                  scale={0.564}>
                  <mesh
                    name="particle048_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle048_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle049"
                  position={[-74.793, 19.128, 10.871]}
                  rotation={[-0.969, 0.387, 2.805]}
                  scale={0.545}>
                  <mesh
                    name="particle049_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle049_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle050"
                  position={[-85.503, 13.887, 15.658]}
                  rotation={[0.295, 0.125, 2.351]}
                  scale={0.525}>
                  <mesh
                    name="particle050_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle050_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle051"
                  position={[-82.194, 17.737, -17.443]}
                  rotation={[0.908, -0.623, 0.102]}
                  scale={0.506}>
                  <mesh
                    name="particle051_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle051_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle052"
                  position={[-93.974, 17.825, -21.396]}
                  rotation={[-0.879, 0.263, -2.802]}
                  scale={0.412}>
                  <mesh
                    name="particle052_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle052_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle053"
                  position={[-93.099, 20.181, -3.48]}
                  rotation={[2.14, -0.027, -2.92]}
                  scale={0.286}>
                  <mesh
                    name="particle053_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle053_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle054"
                  position={[-60.617, 13.363, 15.726]}
                  rotation={[-1.565, 0.107, 0.066]}
                  scale={0.16}>
                  <mesh
                    name="particle054_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle054_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group
                  name="particle055"
                  position={[-55.594, 18.241, 13.865]}
                  rotation={[-0.091, 0.238, 1.156]}
                  scale={0.034}>
                  <mesh
                    name="particle055_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle055_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle056" position={[-67.538, 17.269, -23.165]} scale={0}>
                  <mesh
                    name="particle056_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle056_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle057" position={[-61.325, 17.072, -8.724]} scale={0}>
                  <mesh
                    name="particle057_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle057_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, -524288]}
                  />
                </group>
                <group name="particle058" position={[-80.358, 18.435, -7.329]} scale={0}>
                  <mesh
                    name="particle058_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle058_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle059" position={[-67.976, 19.236, 8.186]} scale={0}>
                  <mesh
                    name="particle059_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle059_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 524288]}
                  />
                </group>
                <group name="particle060" position={[-79.311, 17.914, -8.148]} scale={0}>
                  <mesh
                    name="particle060_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle060_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle061" position={[-55.148, 18.39, 12.908]} scale={0}>
                  <mesh
                    name="particle061_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle061_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, -2097152, 1048576]}
                  />
                </group>
                <group name="particle062" position={[-87.026, 19.063, -13.693]} scale={0}>
                  <mesh
                    name="particle062_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle062_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -1048576]}
                  />
                </group>
                <group name="particle063" position={[-62.419, 16.662, -8.124]} scale={0}>
                  <mesh
                    name="particle063_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle063_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -524288]}
                  />
                </group>
                <group name="particle064" position={[-90.191, 16.213, 5.653]} scale={0}>
                  <mesh
                    name="particle064_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle064_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 524288]}
                  />
                </group>
                <group name="particle065" position={[-55.623, 18.92, 9.795]} scale={0}>
                  <mesh
                    name="particle065_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle065_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, 1048576]}
                  />
                </group>
                <group name="particle066" position={[-56.361, 18.109, 6.198]} scale={0}>
                  <mesh
                    name="particle066_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle066_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle067" position={[-88.735, 19.523, 1.904]} scale={0}>
                  <mesh
                    name="particle067_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle067_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle068" position={[-67.618, 18.841, 4.53]} scale={0}>
                  <mesh
                    name="particle068_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle068_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 524288]}
                  />
                </group>
                <group name="particle069" position={[-74.247, 18.052, 7.07]} scale={0}>
                  <mesh
                    name="particle069_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle069_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle070" position={[-72.18, 18.079, -25.229]} scale={0}>
                  <mesh
                    name="particle070_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle070_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 2097152]}
                  />
                </group>
                <group name="particle071" position={[-84.143, 19.749, -4.114]} scale={0}>
                  <mesh
                    name="particle071_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle071_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -524288]}
                  />
                </group>
                <group name="particle072" position={[-82.928, 18.636, -29.006]} scale={0}>
                  <mesh
                    name="particle072_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle072_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle073" position={[-81.236, 19.339, -13.546]} scale={0}>
                  <mesh
                    name="particle073_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle073_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, -2097152, -1048576]}
                  />
                </group>
                <group name="particle074" position={[-63.775, 17.503, -4.405]} scale={0}>
                  <mesh
                    name="particle074_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle074_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, 0]}
                  />
                </group>
                <group name="particle075" position={[-81.74, 16.866, -3.286]} scale={0}>
                  <mesh
                    name="particle075_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle075_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 1048576, -262144]}
                  />
                </group>
                <group name="particle076" position={[-75.094, 15.092, -12.043]} scale={0}>
                  <mesh
                    name="particle076_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle076_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -1048576]}
                  />
                </group>
                <group name="particle077" position={[-90.53, 18.957, -17.218]} scale={0}>
                  <mesh
                    name="particle077_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle077_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle078" position={[-82.593, 18.696, -15.109]} scale={0}>
                  <mesh
                    name="particle078_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle078_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -1048576]}
                  />
                </group>
                <group name="particle079" position={[-81.072, 18.533, -29.569]} scale={0}>
                  <mesh
                    name="particle079_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle079_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle080" position={[-97.309, 18.158, -4.008]} scale={0}>
                  <mesh
                    name="particle080_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle080_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle081" position={[-82.016, 18.424, 11.734]} scale={0}>
                  <mesh
                    name="particle081_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle081_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle082" position={[-82.029, 18.016, -4.42]} scale={0}>
                  <mesh
                    name="particle082_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle082_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -524288]}
                  />
                </group>
                <group name="particle083" position={[-94.641, 19.738, -0.855]} scale={0}>
                  <mesh
                    name="particle083_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle083_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -65536]}
                  />
                </group>
                <group name="particle084" position={[-81.735, 19.848, -9.799]} scale={0}>
                  <mesh
                    name="particle084_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle084_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle085" position={[-79.18, 17.501, -21.789]} scale={0}>
                  <mesh
                    name="particle085_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle085_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle086" position={[-72.788, 17.171, -16.556]} scale={0}>
                  <mesh
                    name="particle086_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle086_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 1048576]}
                  />
                </group>
                <group name="particle087" position={[-97.713, 13.292, -7.206]} scale={0}>
                  <mesh
                    name="particle087_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle087_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle088" position={[-66.245, 17.134, -3.641]} scale={0}>
                  <mesh
                    name="particle088_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle088_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-4194304, 1048576, -262144]}
                  />
                </group>
                <group name="particle089" position={[-87.253, 19.119, -14.347]} scale={0}>
                  <mesh
                    name="particle089_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle089_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, -1048576]}
                  />
                </group>
                <group name="particle090" position={[-65.224, 18.789, 2.649]} scale={0}>
                  <mesh
                    name="particle090_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle090_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 2097152, 0]}
                  />
                </group>
                <group name="particle091" position={[-78.343, 18.229, -29.719]} scale={0}>
                  <mesh
                    name="particle091_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle091_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 0]}
                  />
                </group>
                <group name="particle092" position={[-58.255, 18.89, 9.773]} scale={0}>
                  <mesh
                    name="particle092_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle092_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, 1048576]}
                  />
                </group>
                <group name="particle093" position={[-76.889, 17.552, -23.355]} scale={0}>
                  <mesh
                    name="particle093_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle093_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, -2097152]}
                  />
                </group>
                <group name="particle094" position={[-67.827, 18.831, 6.074]} scale={0}>
                  <mesh
                    name="particle094_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle094_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle095" position={[-96.688, 19.177, 4.436]} scale={0}>
                  <mesh
                    name="particle095_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle095_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle096" position={[-93.9, 18.495, -23.531]} scale={0}>
                  <mesh
                    name="particle096_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle096_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle097" position={[-87.446, 19.97, -9.622]} scale={0}>
                  <mesh
                    name="particle097_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle097_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle098" position={[-93.556, 17.093, -17.122]} scale={0}>
                  <mesh
                    name="particle098_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle098_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 2097152, -1048576]}
                  />
                </group>
                <group name="particle099" position={[-62.153, 19.215, 11.03]} scale={0}>
                  <mesh
                    name="particle099_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle099_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 1048576]}
                  />
                </group>
                <group name="particle100" position={[-91.325, 18.597, -25.975]} scale={0}>
                  <mesh
                    name="particle100_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle100_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, -2097152, -2097152]}
                  />
                </group>
                <group name="particle101" position={[-93.609, 17.964, -14.446]} scale={0}>
                  <mesh
                    name="particle101_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle101_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, -1048576]}
                  />
                </group>
                <group name="particle102" position={[-53.766, 18.634, -6.742]} scale={0}>
                  <mesh
                    name="particle102_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle102_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 2097152, 0]}
                  />
                </group>
                <group name="particle103" position={[-71.975, 18.009, 4.778]} scale={0}>
                  <mesh
                    name="particle103_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle103_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle104" position={[-67.618, 18.841, 4.53]} scale={0}>
                  <mesh
                    name="particle104_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle104_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 524288]}
                  />
                </group>
                <group name="particle105" position={[-97.72, 17.879, 7.209]} scale={0}>
                  <mesh
                    name="particle105_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle105_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle106" position={[-75.517, 18.64, -17.985]} scale={0}>
                  <mesh
                    name="particle106_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle106_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle107" position={[-72.873, 18.905, 12.674]} scale={0}>
                  <mesh
                    name="particle107_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle107_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 0]}
                  />
                </group>
                <group name="particle108" position={[-75.098, 18.187, -15.755]} scale={0}>
                  <mesh
                    name="particle108_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle108_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle109" position={[-77.156, 18.258, 15.324]} scale={0}>
                  <mesh
                    name="particle109_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle109_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle110" position={[-82.903, 19.17, -4.654]} scale={0}>
                  <mesh
                    name="particle110_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle110_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 524288]}
                  />
                </group>
                <group name="particle111" position={[-97.362, 17.255, -20.612]} scale={0}>
                  <mesh
                    name="particle111_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle111_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle112" position={[-89.997, 17.078, -22.513]} scale={0}>
                  <mesh
                    name="particle112_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle112_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, -2097152]}
                  />
                </group>
                <group name="particle113" position={[-96.688, 19.177, 4.436]} scale={0}>
                  <mesh
                    name="particle113_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle113_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle114" position={[-55.577, 17.48, 2.996]} scale={0}>
                  <mesh
                    name="particle114_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle114_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle115" position={[-60.298, 19.451, -4.936]} scale={0}>
                  <mesh
                    name="particle115_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle115_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle116" position={[-90.084, 19.765, -9.94]} scale={0}>
                  <mesh
                    name="particle116_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle116_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle117" position={[-93.79, 17.991, -11.286]} scale={0}>
                  <mesh
                    name="particle117_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle117_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 0]}
                  />
                </group>
                <group name="particle118" position={[-93.959, 17.658, -21.424]} scale={0}>
                  <mesh
                    name="particle118_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle118_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -2097152]}
                  />
                </group>
                <group name="particle119" position={[-62.962, 16.846, -7.447]} scale={0}>
                  <mesh
                    name="particle119_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle119_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-4194304, 2097152, -524288]}
                  />
                </group>
                <group name="particle120" position={[-97.881, 13.35, 4.571]} scale={0}>
                  <mesh
                    name="particle120_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle120_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle121" position={[-79.737, 19.347, -13.913]} scale={0}>
                  <mesh
                    name="particle121_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle121_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -1048576]}
                  />
                </group>
                <group name="particle122" position={[-82.044, 19.01, -14.47]} scale={0}>
                  <mesh
                    name="particle122_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle122_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle123" position={[-85.615, 20.394, -6.115]} scale={0}>
                  <mesh
                    name="particle123_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle123_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle124" position={[-94.352, 18.69, -27.848]} scale={0}>
                  <mesh
                    name="particle124_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle124_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -4194304]}
                  />
                </group>
                <group name="particle125" position={[-87.444, 20.118, -1.034]} scale={0}>
                  <mesh
                    name="particle125_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle125_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -65536]}
                  />
                </group>
                <group name="particle126" position={[-83.583, 18.373, 12.295]} scale={0}>
                  <mesh
                    name="particle126_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle126_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 1048576]}
                  />
                </group>
                <group name="particle127" position={[-73.532, 15.573, -14.423]} scale={0}>
                  <mesh
                    name="particle127_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle127_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle128" position={[-66.243, 20.387, 8.183]} scale={0}>
                  <mesh
                    name="particle128_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle128_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 524288]}
                  />
                </group>
                <group name="particle129" position={[-91.856, 19.789, 1.339]} scale={0}>
                  <mesh
                    name="particle129_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle129_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle130" position={[-97.674, 15.781, -11.424]} scale={0}>
                  <mesh
                    name="particle130_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle130_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 1048576, 0]}
                  />
                </group>
                <group name="particle131" position={[-97.719, 13.814, -5.159]} scale={0}>
                  <mesh
                    name="particle131_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle131_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle132" position={[-65.347, 18.685, 1.252]} scale={0}>
                  <mesh
                    name="particle132_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle132_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle133" position={[-87.537, 19.934, -0.22]} scale={0}>
                  <mesh
                    name="particle133_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle133_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle134" position={[-95.026, 19.594, 0.27]} scale={0}>
                  <mesh
                    name="particle134_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle134_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 16384]}
                  />
                </group>
                <group name="particle135" position={[-85.825, 19.335, -23.946]} scale={0}>
                  <mesh
                    name="particle135_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle135_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle136" position={[-85.946, 19.521, -21.474]} scale={0}>
                  <mesh
                    name="particle136_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle136_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle137" position={[-56.914, 17.982, 6.323]} scale={0}>
                  <mesh
                    name="particle137_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle137_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 524288]}
                  />
                </group>
                <group name="particle138" position={[-76.889, 17.552, -23.355]} scale={0}>
                  <mesh
                    name="particle138_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle138_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, -2097152]}
                  />
                </group>
                <group name="particle139" position={[-63.643, 20.335, 8.377]} scale={0}>
                  <mesh
                    name="particle139_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle139_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle140" position={[-88.045, 17.313, 13.087]} scale={0}>
                  <mesh
                    name="particle140_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle140_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 1048576, 1048576]}
                  />
                </group>
                <group name="particle141" position={[-91.513, 19.311, 3.936]} scale={0}>
                  <mesh
                    name="particle141_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle141_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 2097152, 262144]}
                  />
                </group>
                <group name="particle142" position={[-55.148, 18.39, 12.908]} scale={0}>
                  <mesh
                    name="particle142_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle142_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, -2097152, 1048576]}
                  />
                </group>
                <group name="particle143" position={[-80.82, 18.947, 13.728]} scale={0}>
                  <mesh
                    name="particle143_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle143_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 1048576]}
                  />
                </group>
                <group name="particle144" position={[-82.704, 18.788, -19.565]} scale={0}>
                  <mesh
                    name="particle144_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle144_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle145" position={[-65.576, 19.355, 4.574]} scale={0}>
                  <mesh
                    name="particle145_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle145_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle146" position={[-63.818, 18.532, 15.486]} scale={0}>
                  <mesh
                    name="particle146_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle146_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle147" position={[-95.757, 19.732, 2.442]} scale={0}>
                  <mesh
                    name="particle147_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle147_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 262144]}
                  />
                </group>
                <group name="particle148" position={[-74.326, 17.817, -24.36]} scale={0}>
                  <mesh
                    name="particle148_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle148_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle149" position={[-97.007, 17.29, -9.797]} scale={0}>
                  <mesh
                    name="particle149_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle149_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 0]}
                  />
                </group>
                <group name="particle150" position={[-93.273, 16.905, -17.928]} scale={0}>
                  <mesh
                    name="particle150_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle150_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 0]}
                  />
                </group>
                <group name="particle151" position={[-76.353, 18.422, -20.292]} scale={0}>
                  <mesh
                    name="particle151_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle151_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle152" position={[-92.483, 19.339, 0.464]} scale={0}>
                  <mesh
                    name="particle152_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle152_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, 32768]}
                  />
                </group>
                <group name="particle153" position={[-91.122, 18.802, -16.746]} scale={0}>
                  <mesh
                    name="particle153_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle153_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, -2097152, -1048576]}
                  />
                </group>
                <group name="particle154" position={[-71.364, 17.215, -30.177]} scale={0}>
                  <mesh
                    name="particle154_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle154_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle155" position={[-92.543, 20.124, -6.755]} scale={0}>
                  <mesh
                    name="particle155_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle155_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -524288]}
                  />
                </group>
                <group name="particle156" position={[-62.438, 18.672, 12.963]} scale={0}>
                  <mesh
                    name="particle156_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle156_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, 0]}
                  />
                </group>
                <group name="particle157" position={[-85.958, 17.955, 14.358]} scale={0}>
                  <mesh
                    name="particle157_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle157_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 1048576]}
                  />
                </group>
                <group name="particle158" position={[-77.812, 17.635, 9.057]} scale={0}>
                  <mesh
                    name="particle158_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle158_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle159" position={[-70.073, 16.701, -18.672]} scale={0}>
                  <mesh
                    name="particle159_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle159_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, -2097152]}
                  />
                </group>
                <group name="particle160" position={[-76.353, 18.422, -20.292]} scale={0}>
                  <mesh
                    name="particle160_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle160_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle161" position={[-55.824, 17.57, 0.725]} scale={0}>
                  <mesh
                    name="particle161_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle161_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle162" position={[-67.817, 20.277, 12.607]} scale={0}>
                  <mesh
                    name="particle162_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle162_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle163" position={[-68.989, 19.359, 10.567]} scale={0}>
                  <mesh
                    name="particle163_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle163_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 2097152, 0]}
                  />
                </group>
                <group name="particle164" position={[-73.891, 17.408, 5.139]} scale={0}>
                  <mesh
                    name="particle164_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle164_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 524288]}
                  />
                </group>
                <group name="particle165" position={[-72.658, 17.154, -30.651]} scale={0}>
                  <mesh
                    name="particle165_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle165_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 2097152]}
                  />
                </group>
                <group name="particle166" position={[-54.82, 15.614, -19.488]} scale={0}>
                  <mesh
                    name="particle166_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle166_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-4194304, -1048576, 0]}
                  />
                </group>
                <group name="particle167" position={[-97.651, 16.72, -14.603]} scale={0}>
                  <mesh
                    name="particle167_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle167_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -1048576]}
                  />
                </group>
                <group name="particle168" position={[-94.965, 18.821, -24.903]} scale={0}>
                  <mesh
                    name="particle168_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle168_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle169" position={[-88.735, 19.523, 1.904]} scale={0}>
                  <mesh
                    name="particle169_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle169_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle170" position={[-91.067, 18.526, 4.99]} scale={0}>
                  <mesh
                    name="particle170_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle170_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 524288]}
                  />
                </group>
                <group name="particle171" position={[-95.924, 17.784, -22.149]} scale={0}>
                  <mesh
                    name="particle171_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle171_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, 0, 0]}
                  />
                </group>
                <group name="particle172" position={[-74.431, 16.423, 15.62]} scale={0}>
                  <mesh
                    name="particle172_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle172_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-8388608, -1048576, 2097152]}
                  />
                </group>
                <group name="particle173" position={[-53.525, 18.308, 10.956]} scale={0}>
                  <mesh
                    name="particle173_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle173_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, 1048576]}
                  />
                </group>
                <group name="particle174" position={[-61.913, 19.143, 10.567]} scale={0}>
                  <mesh
                    name="particle174_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle174_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle175" position={[-65.885, 20.417, 8.286]} scale={0}>
                  <mesh
                    name="particle175_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle175_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 2097152, 524288]}
                  />
                </group>
                <group name="particle176" position={[-92.275, 18.845, -26.361]} scale={0}>
                  <mesh
                    name="particle176_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle176_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle177" position={[-71.359, 18.005, -21.201]} scale={0}>
                  <mesh
                    name="particle177_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle177_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -2097152]}
                  />
                </group>
                <group name="particle178" position={[-67.827, 18.831, 6.074]} scale={0}>
                  <mesh
                    name="particle178_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle178_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 0]}
                  />
                </group>
                <group name="particle179" position={[-71.424, 17.31, -28.814]} scale={0}>
                  <mesh
                    name="particle179_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle179_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle180" position={[-74.522, 18.396, 15.434]} scale={0}>
                  <mesh
                    name="particle180_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle180_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, 1048576]}
                  />
                </group>
                <group name="particle181" position={[-56.743, 17.546, 2.773]} scale={0}>
                  <mesh
                    name="particle181_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle181_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle182" position={[-96.165, 17.731, -22.107]} scale={0}>
                  <mesh
                    name="particle182_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle182_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -2097152]}
                  />
                </group>
                <group name="particle183" position={[-95.432, 18.616, -28.34]} scale={0}>
                  <mesh
                    name="particle183_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle183_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle184" position={[-70.126, 17.945, -24.024]} scale={0}>
                  <mesh
                    name="particle184_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle184_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, -2097152]}
                  />
                </group>
                <group name="particle185" position={[-82.04, 19.847, -11.142]} scale={0}>
                  <mesh
                    name="particle185_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle185_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle186" position={[-55.496, 19.575, -7.136]} scale={0}>
                  <mesh
                    name="particle186_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle186_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-4194304, 0, 0]}
                  />
                </group>
                <group name="particle187" position={[-87.164, 19.465, -11.483]} scale={0}>
                  <mesh
                    name="particle187_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle187_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -1048576]}
                  />
                </group>
                <group name="particle188" position={[-92.285, 18.747, -10.363]} scale={0}>
                  <mesh
                    name="particle188_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle188_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, -1048576]}
                  />
                </group>
                <group name="particle189" position={[-53.534, 13.267, -4.959]} scale={0}>
                  <mesh
                    name="particle189_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle189_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[-4194304, 1048576, 0]}
                  />
                </group>
                <group name="particle190" position={[-83.258, 16.62, 15.409]} scale={0}>
                  <mesh
                    name="particle190_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle190_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 0]}
                  />
                </group>
                <group name="particle191" position={[-93.75, 18.555, -23.726]} scale={0}>
                  <mesh
                    name="particle191_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle191_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle192" position={[-57.678, 18.594, 15.19]} scale={0}>
                  <mesh
                    name="particle192_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle192_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 0, 1048576]}
                  />
                </group>
                <group name="particle193" position={[-53.593, 16.892, -11.788]} scale={0}>
                  <mesh
                    name="particle193_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle193_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[4194304, 0, -1048576]}
                  />
                </group>
                <group name="particle194" position={[-81.353, 19.546, -12.72]} scale={0}>
                  <mesh
                    name="particle194_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle194_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, 0, -1048576]}
                  />
                </group>
                <group name="particle195" position={[-68.191, 17.887, -28.04]} scale={0}>
                  <mesh
                    name="particle195_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle195_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 2097152, -2097152]}
                  />
                </group>
                <group name="particle196" position={[-85.605, 19.961, -3.035]} scale={0}>
                  <mesh
                    name="particle196_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle196_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle197" position={[-97.104, 16.613, -15.482]} scale={0}>
                  <mesh
                    name="particle197_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle197_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[8388608, -1048576, 1048576]}
                  />
                </group>
                <group name="particle198" position={[-94.91, 19.198, -5.914]} scale={0}>
                  <mesh
                    name="particle198_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle198_sand_particle_0.geometry}
                    material={materials.sand_particle}
                  />
                </group>
                <group name="particle199" position={[-69.961, 17.538, -28.9]} scale={0}>
                  <mesh
                    name="particle199_sand_particle_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.particle199_sand_particle_0.geometry}
                    material={materials.sand_particle}
                    position={[0, 1048576, 2097152]}
                  />
                </group>
                <group
                  name="Plane"
                  position={[-75.625, 17.067, -7.767]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                  scale={[23.234, 22.049, 20.331]}>
                  <mesh
                    name="sand"
                    castShadow
                    receiveShadow
                    geometry={nodes.sand.geometry}
                    material={materials.sand}
                  />
                </group>
                <group
                  name="Plane001"
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
                    position={[0, 0, -0.01]}
                  />
                </group>
                <group
                  name="plom_small"
                  position={[-67.237, 24.839, -10.877]}
                  rotation={[-1.396, -0.115, -2.936]}
                  scale={0.024}
                />
                <group name="Point007" position={[-65.127, 39.036, -17.215]}>
                  <group name="Object_755" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_756" />
                  </group>
                </group>
                <group
                  name="Sun"
                  position={[-94.42, 43.576, 2.741]}
                  rotation={[-0.836, 0.346, 1.011]}>
                  <group name="Object_760" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_761" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="plom_small_Eye2"
          position={[-20.374, -6.938, 79.207]}
          rotation={[0.235, -0.075, 0.507]}
          scale={1.006}
        />
        <group
          name="Object_666"
          position={[-67.237, 24.839, -10.877]}
          rotation={[-1.396, -0.115, -2.936]}
          scale={0.024}
        />
        <group
          name="Eye2"
          position={[9.251, -13.672, 172.781]}
          rotation={[1.986, -0.418, -3.017]}
          scale={0.913}>
          <mesh
            name="Eye2_ele_canyon_sun_0"
            castShadow
            receiveShadow
            geometry={nodes.Eye2_ele_canyon_sun_0.geometry}
            material={materials.ele_canyon_sun}
          />
        </group>
        <group
          name="Object_739"
          position={[-69.179, 14.621, -9.199]}
          rotation={[-Math.PI / 2, 0, 2.215]}
          scale={0.032}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/desert.glb')

export default Desert;
