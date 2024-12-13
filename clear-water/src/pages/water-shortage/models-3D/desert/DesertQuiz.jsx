import { useCallback, useRef, useState } from "react";
import { Edges, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import Fishes from "../animals/Fishes";
import Coyote from "../animals/Coyote";

export function DesertQuiz({solution, setIsCorrect, ...props}) {
  const { nodes, materials } = useGLTF("models/desert.gltf");

  const riverRef = useRef();
  const [palmType, setPalmType] = useState("fixed");
  const [riverHovered, setRiverHovered] = useState(false);
  const [hoveredMesh, setHoveredMesh] = useState(null);
  const [fishesVisible, setFishesVisible] = useState(true);

  useFrame(() => {
    if (riverRef.current) {
      if (riverHovered && riverRef.current.position.z > -0.12) {
        riverRef.current.position.z -= 0.001;
      } else if (!riverHovered && riverRef.current.position.z < -0.009) {
        riverRef.current.position.z += 0.001;
      }

      if (riverRef.current.position.z <= -0.08) {
        setFishesVisible(false);
      } else if (riverRef.current.position.z >= -0.015) {
        setFishesVisible(true);
      }
    }
  });

  const handlePalm = useCallback(() => {
    setPalmType((prevType) => (prevType === "fixed" ? "dynamic" : "fixed"));
  }, []);

  const handlePointerOver = useCallback((mesh) => {
    setHoveredMesh(mesh);
  }, []);

  const handlePointerOut = useCallback(() => {
    setHoveredMesh(null);
  }, []);

  const handleMeshClick = (id, event) => {
    event.stopPropagation();
    if (id === solution) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false); 
    }
  };

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.065}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <Physics>
            <group
              position={[-86.455, 21.517, -4.399]}
              rotation={[Math.PI, -1.379, Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.cactus.geometry}
                material={materials.senor}
                scale={0.933}
                onClick={(e) => handleMeshClick('Cáctus', e)}
                onPointerOver={() => handlePointerOver(nodes.cactus)}
                onPointerOut={handlePointerOut}
              >
                {hoveredMesh === nodes.cactus && <Edges color="yellow" />}
              </mesh>
            </group>
            <group
              position={[-75.167, 13.773, -7.437]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[22.166, 22.769, 22.166]}
            >
              <mesh
                ref={riverRef}
                name="River"
                onClick={(e) => handleMeshClick('Río', e)}
                onPointerOver={() => setRiverHovered(true)}
                onPointerOut={() => setRiverHovered(false)}
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
              onClick={(e) => handleMeshClick('Rocks', e)}
              onPointerOver={(e) => {
                e.stopPropagation();
                handlePointerOver(nodes.rock_bottom);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                handlePointerOut();
              }}
            >
              {hoveredMesh === nodes.rock_bottom && <Edges color="yellow" />}
            </mesh>
            <RigidBody type={palmType}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.palms_follaje.geometry}
                material={materials.foliage}
                position={[-64.118, 21.596, 1.251]}
                onClick={solution === "Árboles" ? (e) => handleMeshClick("Árboles", e) : handlePalm}
                onPointerOver={() => handlePointerOver(nodes.palms_follaje)}
                onPointerOut={handlePointerOut}
              >
                {hoveredMesh === nodes.palms_follaje && <Edges color="yellow" />}
              </mesh>
            </RigidBody>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.canyon_skull.geometry}
              material={materials.skull}
              position={[-88.434, 17.576, -29.917]}
              rotation={[-0.467, -0.021, 0.384]}
              onClick={(e) => handleMeshClick('Restos', e)}
              onPointerOver={() => handlePointerOver(nodes.canyon_skull)}
              onPointerOut={handlePointerOut}
            >
              {hoveredMesh === nodes.canyon_skull && <Edges color="yellow" />}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock_bottom.geometry}
              material={materials.rock_bottom}
              position={[-75.625, 8.311, -7.684]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <RigidBody type="kinematicPosition" colliders="trimesh">
              <mesh
                castShadow
                receiveShadow
                onPointerOver={(e) => e.stopPropagation()}
                onPointerOut={(e) => e.stopPropagation()}
                geometry={nodes.sand.geometry}
                material={materials.sand}
                position={[-75.625, 17.067, -7.767]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[23.234, 22.049, 20.331]}
              />
            </RigidBody>
            {fishesVisible && 
              <Fishes
                scale={[0.7, 0.7, 0.7]}
                position={[-72.625, 17.067, -7.767]}
              />
            }
            <Coyote
              scale={[1, 1, 1]}
              position={[-56.625, 19.45, -9.767]}
              rotation={[0, Math.PI / -0.8, 0]}
              onPointerOver={(e) => {
                e.stopPropagation()
                
              }}
              onPointerOut={(e) => {
                e.stopPropagation()
              }}
            />
          </Physics>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/desert.glb");

export default DesertQuiz;
