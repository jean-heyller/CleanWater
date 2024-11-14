/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import Desert from "./models-3D/desert/Desert";
import "./WaterShortage.css";
import Staging from "./staging/Staging";
import Controls from "./controls/Controls";
import Title3D from "./text/Title3D";
import ProblemsButtons from "./html-3D/ProblemsButtons";
import InformationModal from "../../component/modal/InformationModal";
import { waterShortage, PROBLEM_1, PROBLEM_2, PROBLEM_3 } from "../../locales/water-shortage-text.json";
import { KeyboardControls } from "@react-three/drei";
import KeyBoardsFunctions from "./events/KeyboardFunctions";
import MouseFunctions from "./events/MouseFunctions";
import ProblemText from "./text/ProblemText";
const WaterShortage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectedProblem = (problem) => {
    console.log(problem);
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
          <Title3D position={[2.5, 9, 28]} />
          <Desert scale={[18, 18, 18]} position={[85, -25, 18]} />
          <Staging />
          <ProblemsButtons
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleSelectedProblem={handleSelectedProblem}
          />
          <Controls />
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
