import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

import { Physics } from "@react-three/rapier";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer } from "three";
import Coyote from "../water-shortage/models-3D/animals/Coyote";
import Human from "../../component/human/Human";
import Modal from "../../component/modal/Modal"; // Importa el nuevo componente Modal

export const Questionq1 = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const preguntaActual = 1;

  const handleModelClick = (isCorrectAnswer, event) => {
    event.stopPropagation();
    setIsCorrect(isCorrectAnswer);
    setShowModal(true);
  };

  const FishModels = () => {
    const { scene, animations } = useLoader(
      GLTFLoader,
      "/models-3d/koi_fish.glb"
    );
    const mixer = useRef();

    useEffect(() => {
      if (animations && animations.length) {
        mixer.current = new AnimationMixer(scene);
        const action = mixer.current.clipAction(animations[0]);
        action.play();
      }
    }, [animations, scene]);

    useFrame((state, delta) => {
      if (mixer.current) {
        mixer.current.update(delta);
      }
    });

    return (
      <primitive
        object={scene}
        position={[6, 2, -10]}
        scale={0.9}
        castShadow
        receiveShadow
        onClick={(event) => handleModelClick(true, event)} // Correct answer
      />
    );
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>¿A qué especie afecta más la contaminación del agua?</h2>
      </div>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Physics>
          <group
            scale={[0.5, 0.5, 0.5]}
            position={[-0.9, 0, 0]}
            onClick={(event) => handleModelClick(false, event)}
          >
            <Coyote />
          </group>
          <group onClick={(event) => handleModelClick(false, event)}>
            <Human />
          </group>
          <FishModels />
        </Physics>
      </Canvas>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          onClose={() => setShowModal(false)}
          preguntaSiguiente={preguntaActual + 1}
        />
      )}
    </>
  );
};

export default Questionq1;
