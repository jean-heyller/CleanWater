/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState, useRef } from "react";
import Carbono from "../../component/carbono/Carbono";
import Bosque from "../../component/bosque/Bosque";
import { TextureLoader } from "three";
import Ciudad from "../../component/ciudad/ciudad";
import Modal from "../../component/modal/Modal"; // Importa el nuevo componente Modal

export const Question3 = () => {
  const positions = [
    [0, 10, 0],
    [6, 10, 0],
    [-6, 10, 0],
  ];

  const [targetPosition, setTargetPosition] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const refs = useRef([]);

  const handleModelClick = (position, isCorrectAnswer) => {
    setTargetPosition(position);
    setIsCorrect(isCorrectAnswer);
    setShowModal(true);
  };

  const MovingCarbono = ({ position, index }) => {
    const ref = useRef();
    useFrame(() => {
      if (targetPosition && ref.current) {
        ref.current.position.lerp(
          { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
          0.02
        );
      }
    });
    return <Carbono ref={ref} position={position} scale={0.3} />;
  };

  const TexturedSphere = ({ position }) => {
    const texture = useLoader(TextureLoader, "/img/textura.jpg");
    return (
      <mesh
        position={position}
        scale={0.5}
        onClick={() => handleModelClick(position, true)}
      >
        <sphereGeometry args={[5, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };

  const AnimatedBosque = ({ position }) => {
    return (
      <Bosque
        position={position}
        scale={0.007}
        onClick={() => handleModelClick(position, false)}
      />
    );
  };

  const AnimatedCiudad = ({ position }) => {
    return (
      <Ciudad
        position={position}
        scale={0.07}
        onClick={() => handleModelClick(position, false)}
      />
    );
  };

  return (
    <>
      <div>
        <Canvas camera={{ position: [0, 0, 20] }}>
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          {positions.map((position, index) => (
            <MovingCarbono key={index} position={position} index={index} />
          ))}
          <TexturedSphere position={[-13, -6, 0]} />
          <AnimatedBosque position={[0, -7, 0]} />
          <AnimatedCiudad position={[13, -6, 0]} />
          <OrbitControls />
        </Canvas>
      </div>
      {showModal && (
        <Modal
          isCorrect={isCorrect}
          onClose={() => setShowModal(false)}
          preguntaSiguiente={4}
        />
      )}
    </>
  );
};

export default Question3;