import { Canvas } from "@react-three/fiber";
import { Text3D } from "@react-three/drei";
import Controls from "../../component/controls/Controls";
import Fish3D from "../../component/fish/Fish3D";
import { useTypeStore } from "../../stores/store-type-selected";
import FunctionButtons from "./function-buttons/FunctionButtons";
import { useState } from "react";

const Home = () => {
  const { typeProblem } = useTypeStore();
  const [introState, setIntroState] = useState(false)
  
  return (
    <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen">
      <Canvas camera={{ position: [0, 2, 4], fov:110}}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[0, 5, 3]} intensity={1} />
        <Text3D
          position={[-5.5, 3, 1]}
          font="/fonts/3d/blue-ocean.json"
          size={0.75}
          height={0.2}
          anchorX="center" // Centra el texto en el eje X
          anchorY="middle"
        >
          {introState ? "Select a problem" : "Welcome to CleanWater"}
          <meshStandardMaterial attach="material" color="#87CEEB" />
        </Text3D>
        <FunctionButtons state={introState} setState={setIntroState}/>
        <Fish3D position={[-3, 0, 0]} />
        <Controls element={typeProblem} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
