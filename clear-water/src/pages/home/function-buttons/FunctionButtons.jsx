import { useRef, useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button3D from "../../../component/button-madera/Button3D";
import { Box } from "@react-three/drei";
import sound from "/audio/sound_home.mp3";
import { MathUtils } from "three";
import { useFrame } from "@react-three/fiber";
import { usePositionButtonStore } from "../../../stores/store-buttons-position";

const FunctionButtons = ({state, setState}) => {
  const buttonRefs = useRef([]);
  const positionNewButton = { x: 6, y: 6, z: 0 }; 
  const boxRef = useRef();

  const audio = new Audio(sound);

  const navigate = useNavigate();

  const { positionButton1, positionButton2, positionButton3, positionSoundButton, positionBox } =
    usePositionButtonStore();

  const [targetPositions, setTargetPositions] = useState({
    button1: positionButton1,
    button2: positionButton2,
    button3: positionButton3,
    soundButton: positionSoundButton,
    box: positionBox,
  });

  const handleStartClick = () => {
    console.log("Start button clicked!");
    setTargetPositions({
      button1: { x: -9, y: 0.5, z: 0 },
      button2: { x: -9, y: -1.5, z: 0 },
      button3: { x: -9, y: -3.5, z: 0 },
      soundButton: { x: -9, y: 2.5, z: 0 },
      box: { x: -10.8, y: -0.5, z: -0.1 },
    });
    setState(true);
    if (state) {
      navigate("/ocean");
    }
  };

  const handleScoreClick = (buttonText) => {
    if (state) {
      navigate("/water-shortage");
    }else{
      navigate("/table");
    }
  };

  const handleExitClick = (buttonText) => {
    if (state) {
      navigate("/recycling");
    }else {
      navigate("/form")
    }
  }

  const handleMyProfileClick = (buttonText) => {
    navigate("/handle");
  }

  const handleSoundClick = () => {
    audio.play();
  };

  const step = 0.02;

  useFrame(() => {
    buttonRefs.current.forEach((ref, index) => {
      if (ref) {
        const targetPosition = targetPositions[`button${index + 1}`] || targetPositions.soundButton;
        const newPosX = MathUtils.lerp(ref.position.x, targetPosition.x, step);
        const newPosY = MathUtils.lerp(ref.position.y, targetPosition.y, step);
        const newPosZ = MathUtils.lerp(ref.position.z, targetPosition.z, step);
        ref.position.set(newPosX, newPosY, newPosZ);
      }
    });

    if (boxRef.current) {
      const targetPosition = targetPositions.box;
      const newPosX = MathUtils.lerp(boxRef.current.position.x, targetPosition.x, step);
      const newPosY = MathUtils.lerp(boxRef.current.position.y, targetPosition.y, step);
      const newPosZ = MathUtils.lerp(boxRef.current.position.z, targetPosition.z, step);
      boxRef.current.position.set(newPosX, newPosY, newPosZ);
    }
  });

  return (
    <>
      <Button3D
        ref={(el) => (buttonRefs.current[0] = el)}
        position={[positionButton1.x, positionButton1.y, positionButton1.z]}
        onClick={handleStartClick}
        text={state ? "Problema 1" : "Start"}
      />
      <Button3D
        ref={(el) => (buttonRefs.current[1] = el)}
        position={[positionButton2.x, positionButton2.y, positionButton2.z]}
        onClick={() => handleScoreClick("Scores")}
        text={state ? "Problema 2" : "Score"}
      />
      <Button3D
        ref={(el) => (buttonRefs.current[2] = el)}
        position={[positionButton3.x, positionButton3.y, positionButton3.z]}
        onClick={() => handleExitClick("Exit")}
        text={state ? "Problema 3" : "Exit"}
      />
      <Button3D
        ref={(el) => (buttonRefs.current[3] = el)}
        position={[positionSoundButton.x, positionSoundButton.y, positionSoundButton.z]}
        onClick={handleSoundClick}
        text="Introducción"
      />
       <Button3D
        position={[positionNewButton.x, positionNewButton.y, positionNewButton.z]}
        onClick={handleMyProfileClick}
        text="Quiz"
      />
      <Box
        ref={boxRef}
        position={[positionBox.x, positionBox.y, positionBox.z]}
        args={[0.1, 6, 0.1]}
      >
        <meshStandardMaterial attach="material" color="saddlebrown" />
      </Box>
    </>
  );
};

export default FunctionButtons;
