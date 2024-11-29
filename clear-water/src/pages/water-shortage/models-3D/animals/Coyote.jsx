import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Coyote = (props) => {
  const coyoteRef = useRef();
  const { nodes, materials, animations } = useGLTF("models/coyote.gltf");
  const { actions } = useAnimations(animations, coyoteRef);

  useEffect(() => {
    actions["Idle"].play();
    return () => actions["Idle"].stop();
  }, [actions]);

  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group ref={coyoteRef} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="Sketchfab_model"
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.54}
          >
            <group name="root">
              <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                <group
                  name="Sketchfab_model_0"
                  position={[-0.34, 0.001, 0]}
                  rotation={[-Math.PI / 2, 0.009, 0]}
                  scale={0.009}
                >
                  <group
                    name="5e8947753cfc405e9029b0383a8ca301fbx_1"
                    rotation={[Math.PI / 2, 0, 0]}
                  >
                    <group name="Object_2_2">
                      <group name="RootNode_3">
                        <group name="Coyote_4">
                          <group name="Main_7">
                            <group name="DeformationSystem_8">
                              <group name="Object_9_9">
                                <group name="GLTF_created_0">
                                  <group name="Object_12_12_correction">
                                    <group name="Object_12_12" />
                                  </group>
                                  <skinnedMesh
                                    name="Object_74"
                                    geometry={nodes.Object_74.geometry}
                                    material={materials.Coyote}
                                    skeleton={nodes.Object_74.skeleton}
                                  />
                                  <primitive
                                    object={nodes.GLTF_created_0_rootJoint}
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

export default Coyote;
