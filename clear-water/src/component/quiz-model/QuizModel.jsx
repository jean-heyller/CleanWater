import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";


import { useProblemStore } from "../../stores/store-problem-selected";
import Controls from "../../component/controls/Controls";
import { Loader } from "@react-three/drei";
import Title3D from "../../component/title3D/Title3D";
import DesertQuiz from "../../pages/water-shortage/models-3D/desert/DesertQuiz";
import Staging from "../../pages/water-shortage/staging/Staging"

const QuizModel = ({ title, solution, setIsCorrect }) => {
  const { problem } = useProblemStore();
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 4], fov: 39 }}>
        <Title3D title={title} position={[9, 8, 21]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Staging />
          <DesertQuiz 
            position={[85, -25, 18]} 
            scale={[18, 18, 18]} 
            solution={solution} 
            setIsCorrect={setIsCorrect}
          />
          <Controls element={problem} target={[-14, -1, 20]} />
        </Suspense>
      </Canvas>
      <Loader />
    </>
  );
};

export default QuizModel;
