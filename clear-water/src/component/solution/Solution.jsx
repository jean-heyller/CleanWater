/* eslint-disable react/no-unknown-property */
import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { exp } from 'three/webgpu'

export function Solution(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/problema barco2.gltf')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Activa todas las animaciones
    Object.values(actions).forEach(action => {
      action.play();
    });

    // O activa una animación específica
    // actions['nombre_de_la_animacion'].play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Low_Poly_Shark_Cage_Diving_Sceneobjcleanermaterialmergergle">
            <mesh
              name="Object_2"
              castShadow
              receiveShadow
              geometry={nodes.Object_2.geometry}
              material={materials.Bubbles}
            />
            <group name="Object_3" />
            <mesh
              name="Object_4"
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials.Ocean}
              position={[0.152, -0.342, 0.083]}
            />
            <mesh
              name="Object_5"
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials.Main}
            />
            <mesh
              name="Object_8"
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials.Main}
              position={[-2.511, 1.008, 11.251]}
            />
            <mesh
              name="Object_9"
              castShadow
              receiveShadow
              geometry={nodes.Object_9.geometry}
              material={materials.Main}
            />
          </group>
        </group>
        <group
          name="Sketchfab_model001"
          position={[-34.005, 18.93, 2.945]}
          rotation={[-1.677, 0.461, 1.676]}
          scale={0.088}>
          <group name="b2a0aabc47744e71980de11956460a7afbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2001">
              <group name="RootNode">
                <group
                  name="Box004"
                  position={[8.826, 6.31, -138.716]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.836}>
                  <mesh
                    name="Box004_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box004_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="Box005"
                  position={[122.392, 8.74, -15.548]}
                  rotation={[-Math.PI / 2, 0, Math.PI]}>
                  <mesh
                    name="Box005_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box005_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="Box006"
                  position={[-60.743, -8.717, -11.605]}
                  rotation={[-1.969, 0.093, -0.035]}
                  scale={1.517}>
                  <mesh
                    name="Box006_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box006_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="Box007"
                  position={[72.125, -5.129, 38.935]}
                  rotation={[-1.441, -0.106, 1.859]}
                  scale={1.453}>
                  <mesh
                    name="Box007_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box007_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="Box009"
                  position={[-47.791, -3.465, -43.986]}
                  rotation={[-1.767, 0.159, -0.737]}
                  scale={[1.156, 1.517, 1.517]}>
                  <mesh
                    name="Box009_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box009_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="Box010"
                  position={[-37.604, 4.67, 175.916]}
                  rotation={[-Math.PI / 2, 0, -1.484]}
                  scale={[1.329, 1.329, 0.782]}>
                  <mesh
                    name="Box010_01_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Box010_01_-_Default_0'].geometry}
                    material={materials['01_-_Default']}
                  />
                </group>
                <group
                  name="conat01"
                  position={[-80.494, 19.751, 13.343]}
                  rotation={[-Math.PI / 2, 0, -0.262]}
                  scale={0.881}>
                  <mesh
                    name="conat01_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat01_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat01_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat01_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="conat02"
                  position={[-68.286, 19.751, 124.282]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="conat02_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat02_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat02_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat02_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="conat03"
                  position={[-81.02, 19.751, -141.246]}
                  rotation={[-Math.PI / 2, 0, 0.436]}>
                  <mesh
                    name="conat03_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat03_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat03_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat03_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="conat04"
                  position={[128.49, 15.081, -170.401]}
                  rotation={[-Math.PI / 2, 0, 0]}>
                  <mesh
                    name="conat04_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat04_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat04_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat04_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="conat05"
                  position={[89.378, 15.081, -101.646]}
                  rotation={[-Math.PI / 2, 0, Math.PI / 6]}>
                  <mesh
                    name="conat05_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat05_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat05_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat05_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="conat06"
                  position={[110.533, 16.878, 124.673]}
                  rotation={[-Math.PI / 2, 0, -0.262]}>
                  <mesh
                    name="conat06_03_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat06_03_-_Default_0'].geometry}
                    material={materials['03_-_Default']}
                  />
                  <mesh
                    name="conat06_09_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['conat06_09_-_Default_0'].geometry}
                    material={materials['09_-_Default']}
                  />
                </group>
                <group
                  name="efx"
                  position={[-16.661, 13.803, 57.77]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.08}>
                  <group name="Cylinder001" position={[0, 0, -3.672]}>
                    <mesh
                      name="Cylinder001_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder001_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder003"
                    position={[0, 0, -3.672]}
                    rotation={[0, 0, -Math.PI / 6]}
                    scale={0.799}>
                    <mesh
                      name="Cylinder003_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder003_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                </group>
                <group
                  name="efx001"
                  position={[8.914, 15.119, 68.97]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.096}>
                  <group
                    name="Cylinder004"
                    position={[0, 0, -3.672]}
                    rotation={[0, 0, -Math.PI / 6]}
                    scale={0.799}>
                    <mesh
                      name="Cylinder004_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder004_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                  <group name="Cylinder005" position={[0, 0, -3.672]}>
                    <mesh
                      name="Cylinder005_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder005_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                </group>
                <group
                  name="efx002"
                  position={[8.914, 15.119, 38.101]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.056}>
                  <group name="Cylinder006" position={[0, 0, -3.672]}>
                    <mesh
                      name="Cylinder006_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder006_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder007"
                    position={[0, 0, -3.672]}
                    rotation={[0, 0, -Math.PI / 6]}
                    scale={0.799}>
                    <mesh
                      name="Cylinder007_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder007_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                </group>
                <group
                  name="efx003"
                  position={[-13.942, 15.119, 41.14]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={0.056}>
                  <group name="Cylinder008" position={[0, 0, -3.672]}>
                    <mesh
                      name="Cylinder008_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder008_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                  <group
                    name="Cylinder009"
                    position={[0, 0, -3.672]}
                    rotation={[0, 0, -Math.PI / 6]}
                    scale={0.799}>
                    <mesh
                      name="Cylinder009_14_-_Default_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Cylinder009_14_-_Default_0'].geometry}
                      material={materials['14_-_Default']}
                    />
                  </group>
                </group>
                <group
                  name="fish_004"
                  position={[1.125, 4.803, 18.722]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.486, 0.448, 0.486]}>
                  <mesh
                    name="fish_004_fish_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.fish_004_fish_0.geometry}
                    material={materials.fish}
                  />
                </group>
                <group
                  name="fish_005"
                  position={[-17.431, 4.803, 30.671]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.333, 0.307, 0.333]}>
                  <mesh
                    name="fish_005_fish_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.fish_005_fish_0.geometry}
                    material={materials.fish}
                  />
                </group>
                <group
                  name="fish_03"
                  position={[10.048, 4.803, -45.971]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[0.401, 0.37, 0.401]}>
                  <mesh
                    name="fish_03_fish_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.fish_03_fish_0.geometry}
                    material={materials.fish}
                  />
                </group>
                <group
                  name="Plane002"
                  position={[10.483, 14.223, -15.624]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.852, 1, 1]}>
                  <mesh
                    name="Plane002_water_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002_water_0.geometry}
                    material={materials.water}
                  />
                </group>
                <group
                  name="Plane003"
                  position={[10.483, 1.257, -18.084]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.852, 1, 1]}>
                  <mesh
                    name="Plane003_13_-_Default_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Plane003_13_-_Default_0'].geometry}
                    material={materials['13_-_Default']}
                  />
                </group>
                <group
                  name="Plane004"
                  position={[10.483, 9.076, -15.624]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={[1.852, 1, 1]}>
                  <mesh
                    name="Plane004_water_0"
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane004_water_0.geometry}
                    material={materials.water}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model002"
          position={[-32.098, 19.631, -0.643]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={5.361}>
          <group name="Trash_Bag_Pack_ve2hddjga_Lowfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="RootNode001">
              <group name="ve2hddjga_LOD0_TIER3_000">
                <mesh
                  name="ve2hddjga_LOD0_TIER3_000_MatID_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_000_MatID_1_0.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[130.683, 0, 137.42]}
                />
              </group>
              <group name="ve2hddjga_LOD0_TIER3_001">
                <mesh
                  name="ve2hddjga_LOD0_TIER3_001_MatID_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_001_MatID_1_0.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[57.712, 0, 160.028]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_001_MatID_1_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_001_MatID_1_0001.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[343.105, -302.423, 30.699]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_001_MatID_1_0002"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_001_MatID_1_0002.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[343.105, -238.73, 202.836]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_001_MatID_1_0003"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_001_MatID_1_0003.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[-162.644, 82.013, 104.204]}
                />
              </group>
              <group name="ve2hddjga_LOD0_TIER3_002">
                <mesh
                  name="ve2hddjga_LOD0_TIER3_002_MatID_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_002_MatID_1_0.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[57.712, 0, 160.028]}
                />
              </group>
              <group name="ve2hddjga_LOD0_TIER3_003">
                <mesh
                  name="ve2hddjga_LOD0_TIER3_003_MatID_1_0"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_003_MatID_1_0.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[57.712, 0, 160.028]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_003_MatID_1_0001"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_003_MatID_1_0001.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[343.105, -302.423, 30.699]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_003_MatID_1_0002"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_003_MatID_1_0002.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[343.105, -238.73, 202.836]}
                />
                <mesh
                  name="ve2hddjga_LOD0_TIER3_003_MatID_1_0003"
                  castShadow
                  receiveShadow
                  geometry={nodes.ve2hddjga_LOD0_TIER3_003_MatID_1_0003.geometry}
                  material={materials.Trash_Bag_Pack_ve2hddjga_Low}
                  position={[-162.644, 82.013, 104.204]}
                />
              </group>
            </group>
          </group>
        </group>
        <group
          name="Sketchfab_model003"
          position={[-0.169, -13.442, -11.396]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.557}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Mesh_0004_0">
                <mesh
                  name="Object_4001"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4001.geometry}
                  material={materials['Material_0.005']}
                  position={[-1.613, 6.719, -0.647]}
                />
                <mesh
                  name="Object_4002"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4002.geometry}
                  material={materials['Material_0.005']}
                  position={[-1.317, 8.2, -0.915]}
                />
                <mesh
                  name="Object_4003"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4003.geometry}
                  material={materials['Material_0.005']}
                  position={[-0.911, 9.438, -1.12]}
                />
              </group>
            </group>
          </group>
        </group>
        <group name="Light" position={[4.076, 5.904, -1.005]} rotation={[1.89, 0.881, -2.045]} />
        <group name="Camera" position={[7.359, 4.958, 6.926]} rotation={[1.242, 0.33, -0.76]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/problema barco2.gltf')
export default Solution