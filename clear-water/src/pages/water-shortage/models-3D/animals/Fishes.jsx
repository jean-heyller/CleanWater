import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Fishes = (props) => {
  const fishGroupRef = useRef();
  const { nodes, materials, animations } = useGLTF("models/peces.gltf");
  const { actions } = useAnimations(animations, fishGroupRef);

  useEffect(() => {
    if (actions && actions["Swim"]) {
      actions["Swim"].play();
    }
    return () => {
      if (actions && actions["Swim"]) {
        actions["Swim"].stop();
      }
    };
  }, [actions]);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group ref={fishGroupRef} {...props} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Sketchfab_model_8" rotation={[-Math.PI / 2, 0, 0]}>
                  <group name="root_7">
                    <group
                      name="GLTF_SceneRootNode_6"
                      rotation={[Math.PI / 2, 0, 0]}
                    >
                      <group
                        name="Sketchfab_model_4_5"
                        rotation={[-Math.PI / 2, 0, 0]}
                      >
                        <group name="root_3_4">
                          <group
                            name="GLTF_SceneRootNode_2_3"
                            rotation={[Math.PI / 2, 0, 0]}
                          >
                            <group
                              name="fish_0_1_2"
                              position={[-0.249, 0, -0.058]}
                              rotation={[-Math.PI, 0.541, -Math.PI]}
                              scale={0.445}
                            >
                              <group name="mesh_0_0_1">
                                <group name="mesh_0_0">
                                  <mesh
                                    name="mesh_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.mesh_0.geometry}
                                    material={materials["Material.001"]}
                                    morphTargetDictionary={
                                      nodes.mesh_0.morphTargetDictionary
                                    }
                                    morphTargetInfluences={
                                      nodes.mesh_0.morphTargetInfluences
                                    }
                                  />
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Fishes;
