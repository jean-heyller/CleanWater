/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Desert from "./models-3D/desert/Desert";
import "./WaterShortage.css";
import Staging from "./staging/Staging";
import Controls from "../../component/controls/Controls";
import { useProblemStore } from "../../stores/store-problem-selected";
import Title3D from "./text/Title3D";
import ProblemsButtons from "./html-3D/ProblemsButtons";
import InformationModal from "../../component/modal/InformationModal";
import {
  waterShortage,
  PROBLEM_1,
  PROBLEM_2,
  PROBLEM_3,
} from "../../locales/water-shortage-text.json";
import { KeyboardControls } from "@react-three/drei";
import KeyBoardsFunctions from "./events/KeyboardFunctions";
import MouseFunctions from "./events/MouseFunctions";
import ProblemText from "./text/ProblemText";
import Video from "./videos/Video";
import { Physics } from "@react-three/rapier";
import Fish from "./models-3D/animals/Fish";
import Fishes from "./models-3D/animals/Fishes";
import Coyote from "./models-3D/animals/Coyote";
import Grass from "./models-3D/plants/Grass";
import Cuboid from "./models-3D/collider/Cuboid";

const WaterShortage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const { problem } = useProblemStore();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectedProblem = (problem) => {
    setSelectedProblem(problem);
  };

  return (
    <>
      <KeyboardControls
        map={[
          { name: "Next_Problem", keys: ["ArrowRight"] },
          { name: "Previous_Problem", keys: ["ArrowLeft"] },
          { name: "Base", keys: ["Escape"] },
        ]}
      >
        <MouseFunctions handleSelectedProblem={handleSelectedProblem}>
          <Physics>
            <Title3D position={[2.5, 40, 28]} />
            <Cuboid position={[2.5, 11.5, 28]}/>
            <Desert scale={[18, 18, 18]} position={[85, -25, 18]} />
            <Grass scale={[1.8, 1.8, 1.8]} position={[-16.5, -1.3, 11.5]} />
            <Fish
              scale={[0.2, 0.2, 0.2]}
              position={[2.5, -7.0, 12]}
              rotation={[0, Math.PI / 0.55, 0]}
            />
            <Fishes scale={[0.7, 0.7, 0.7]} position={[7, -7.0, 1]} />
            <Coyote
              scale={[1, 1, 1]}
              position={[-16, -4.5, -18]}
              rotation={[0, Math.PI / -0.8, 0]}
            />
          </Physics>
          <Staging />
          <Video 
            name="screen" 
            position={[7, 3, -3]} 
            scale={10} 
            rotation={[0, Math.PI/-0.82, 0]}
            setIsVideoOpen={setIsVideoOpen}
            isVideoOpen={isVideoOpen}
          />
          <ProblemsButtons
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleSelectedProblem={handleSelectedProblem}
          />
          <Controls element={problem} target={[-14, -1, 20]} />
          <KeyBoardsFunctions handleSelectedProblem={handleSelectedProblem} />
        </MouseFunctions>
      </KeyboardControls>
      <InformationModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        data={waterShortage}
      />
      <ProblemText
        selectedProblem={selectedProblem}
        data={
          selectedProblem === "PROBLEM_1"
            ? PROBLEM_1
            : selectedProblem === "PROBLEM_2"
            ? PROBLEM_2
            : selectedProblem === "PROBLEM_3"
            ? PROBLEM_3
            : null
        }
      />
    </>
  );
};

export default WaterShortage;
