import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const Fish = (props) => {
  const fishRef = useRef();
  const { nodes, materials, animations } = useGLTF("models/pez.gltf");
  const { actions } = useAnimations(animations, fishRef);
  
  useEffect(() => {
    actions["swim"].play();
    return () => actions["swim"].stop();
  }, [actions]);
  
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group ref={fishRef} {...props} dispose={null}>
        <group name="Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Root">
              <group name="Armature" position={[0, 3.196, 0.624]}>
                <group
                  name="Circle"
                  position={[0, -0.398, 0.061]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.371, 0.608, 0.608]}
                />
                <group
                  name="Circle001"
                  position={[0.177, 0.758, 0.154]}
                  rotation={[0, 1.571, 0]}
                  scale={0.152}
                />
                <skinnedMesh
                  name="Circle001_0"
                  geometry={nodes.Circle001_0.geometry}
                  material={materials["Material.001"]}
                  skeleton={nodes.Circle001_0.skeleton}
                />
                <group
                  name="Circle002"
                  position={[0, -0.398, 0.061]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.371, 0.608, 0.608]}
                />
                <skinnedMesh
                  name="Circle002_0"
                  geometry={nodes.Circle002_0.geometry}
                  material={materials["Material.001"]}
                  skeleton={nodes.Circle002_0.skeleton}
                />
                <group
                  name="Circle003"
                  position={[0, -0.398, 0.061]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[0.371, 0.608, 0.608]}
                />
                <skinnedMesh
                  name="Circle003_0"
                  geometry={nodes.Circle003_0.geometry}
                  material={materials["Material.001"]}
                  skeleton={nodes.Circle003_0.skeleton}
                />
                <skinnedMesh
                  name="Circle_0"
                  geometry={nodes.Circle_0.geometry}
                  material={materials["Material.001"]}
                  skeleton={nodes.Circle_0.skeleton}
                />
                <primitive object={nodes.Armature_rootJoint} />
              </group>
              <group
                name="Lamp"
                position={[4.076, 1.005, 5.904]}
                rotation={[-0.268, 0.602, 1.931]}
              >
                <group name="Lamp001" />
              </group>
            </group>
          </group>
        </group>
      </group>
    </RigidBody>
  );
};

export default Fish;
