/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { useState } from "react";
import Coral from "../../component/coral/Coral";
import Plastico from "../../component/plastico/Plastico";
import Ancla from "../../component/ancla/Ancla";
import Modal from "../../component/modal/Modal"; // Importa el nuevo componente Modal

export const Question2 = () => {
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const preguntaActual = 2;

  const handleModelClick = (isCorrectAnswer) => {
    setIsCorrect(isCorrectAnswer);
    setShowModal(true);
  };

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h2>¿Qué elemento pertenece realmente al mar?</h2>
      </div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Canvas camera={{ position: [0, 0, 20] }}>
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Physics>
            <Coral
              scale={50}
              position={[9, 0, 0]}
              onClick={() => handleModelClick(true)}
            />
            <Plastico
              position={[1, 0, 0]}
              scale={0.09}
              onClick={() => handleModelClick(false)}
            />
            <Ancla
              scale={3}
              position={[-5, 0, 10]}
              onClick={() => handleModelClick(false)}
            />
          </Physics>
          <OrbitControls />
        </Canvas>
      </div>
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

export default Question2;