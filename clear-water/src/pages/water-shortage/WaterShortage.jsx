/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Desert from "./models-3D/desert/Desert";
import "./WaterShortage.css";
import Staging from "./staging/Staging";
import Controls from "./controls/Controls";
import Title3D from "./text/Title3D";
import ProblemsButtons from "./html-3D/ProblemsButtons";
import InformationModal from "../../component/modal/InformationModal";
import { waterShortage } from "../../locales/water-shortage-text.json";

const WaterShortage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Canvas shadows camera={{ position: [0, 2, 4], fov: 35 }}>
        <Title3D position={[2.5, 9, 28]} />
        <Desert scale={[18, 18, 18]} position={[85, -25, 18]} />
        <Staging />
        <ProblemsButtons
          isModalOpen={isModalOpen}
          handleOpenModal={handleOpenModal}
        />
        <Controls />
      </Canvas>
      <InformationModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        data={waterShortage}
      />
    </>
  );
};

export default WaterShortage;
