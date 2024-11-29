import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Grass = (props) => {
  const grassRef = useRef();
  const { nodes, materials, animations } = useGLTF("models/vegetación.gltf");
  const { actions } = useAnimations(animations, grassRef);
  
  useEffect(() => {
    actions["Dance"].play();
    return () => actions["Dance"].stop();
  }, [actions]);

  return (
    <RigidBody type="fixed" colliders= "trimesh">
      <group ref={grassRef} {...props} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="48ccf30f8e664cc18a89cb1534264db1abccleanermaterialmergergle">
              <group name="Object_2" rotation={[Math.PI / 2, 0, 0]}>
                <group name="Object_3">
                  <group name="MorphMainGroup">
                    <mesh
                      name="grass_Shape"
                      castShadow
                      receiveShadow
                      geometry={nodes.grass_Shape.geometry}
                      material={materials.grass_Shape}
                      morphTargetDictionary={
                        nodes.grass_Shape.morphTargetDictionary
                      }
                      morphTargetInfluences={
                        nodes.grass_Shape.morphTargetInfluences
                      }
                    />
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

export default Grass;
