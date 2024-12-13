import { Text } from "@react-three/drei";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavigateButtons = (props) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const handleQuizButton = () => {
    navigate("/question1"); 
  }

  const handleNextButton = () => {
    navigate("/ocean")
  }

  return (
    <group {...props}>
      <mesh
        position={[-1.1, -0.7, 1.1]}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered('next')}
        onPointerOut={() => setHovered(null)}
        onClick={handleNextButton}
      >
        <boxGeometry args={[0.3,0.1,0.05]} />
        <meshBasicMaterial color={hovered === 'next' ? 'lightblue' : '#03f9d0'} />
        <Text
          position={[0, 0, 0.03]}
          font={"/fonts/Before-the-Rainbow.otf"}
          fontSize={0.05}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Siguiente Prob
        </Text>
      </mesh>
      <mesh
        position={[1.1, -0.7, 1.1]}
        castShadow
        receiveShadow
        onPointerOver={() => setHovered('quiz')}
        onPointerOut={() => setHovered(null)}
        onClick={handleQuizButton}
      >
        <boxGeometry args={[0.3,0.1,0.05]} />
        <meshBasicMaterial color={hovered === 'quiz' ? 'lightblue' : '#03f9d0'} />
        <Text
          position={[0, 0, 0.03]}
          fontSize={0.05}
          font={"/fonts/Before-the-Rainbow.otf"}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          Ir al Quiz
        </Text>
      </mesh>
    </group>
  );
};

export default NavigateButtons;
