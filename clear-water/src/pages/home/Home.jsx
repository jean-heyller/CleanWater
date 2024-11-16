import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text3D, OrbitControls, Box } from "@react-three/drei";
import Button3D from "../../component/button-madera/Button3D";
import Fish3D from "../../component/fish/Fish3D";
import World3D from "../../component/word/World";
import { useNavigate } from "react-router-dom";
import sound from "/audio/sound_home.mp3";

const RotatingWorld3D = ({ showWorld }) => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  useFrame(() => {
    if (showWorld) {
      setRotation((prevRotation) => [
        prevRotation[0],
        prevRotation[1] + 0.01,
        prevRotation[2],
      ]);
    }
  });

  return <World3D position={[-3, 0, 0]} scale={[0.01, 0.01, 0.01]} rotation={rotation} />;
};

const Home = () => {
  const audio = new Audio(sound);
  const navigate = useNavigate();
  const [showWorld, setShowWorld] = useState(false);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 10]);

  const handleButtonClick = (buttonText) => {
    alert(`Button ${buttonText} clicked!`);
  };

  const handleStartClick = () => {
    navigate("/ocean");
  };

  const handleSoundClick = () => {
    audio.play();
  };

  const handleScroll = () => {
    console.log("Scroll Y Position:", window.scrollY);
    if (window.scrollY > 0) { // Adjust the scroll value as needed
      setShowWorld(true);
      setCameraPosition([0, -5, 10]); // Move the camera down
    }
  };

  useEffect(() => {
    const siteContent = document.getElementsByClassName("site-content")[0];
    if (siteContent) {
      siteContent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (siteContent) {
        siteContent.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    console.log("Camera Position:", cameraPosition);
  }, [cameraPosition]);

  return (
    <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen">
      <Canvas camera={{ position: cameraPosition, fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 3]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Text3D
          position={[-6.5, 3, 1]}
          font="/fonts/3d/blue-ocean.json"
          size={1}
          height={0.2}
        >
          Clean Water Welcome
          <meshStandardMaterial attach="material" color="#87CEEB" />
        </Text3D>
        <Button3D
          position={[-0.9, 1, 0]}
          onClick={handleStartClick}
          text="Start"
        />
        <Button3D
          position={[0.5, -1, 0]}
          onClick={() => handleButtonClick("2")}
          text="Scores"
        />
        <Button3D
          position={[-0.9, -3, 0]}
          onClick={() => handleButtonClick("3")}
          text="Exit"
        />
        <Button3D
          position={[-7, 1.5, 0]}
          onClick={handleSoundClick}
          text="click me"
        />

        <Box position={[0, -1, -0.1]} args={[0.1, 6, 0.1]}>
          <meshStandardMaterial attach="material" color="saddlebrown" />
        </Box>
        <Fish3D position={[-3, 0, 0]} />
        {showWorld && (
          <>
            <RotatingWorld3D showWorld={showWorld} />
            <Text3D
              position={[3, 0, 0]}
              font="/fonts/3d/blue-ocean.json"
              size={0.5}
              height={0.1}
            >
              2.5% of the world's water is potable
              <meshStandardMaterial attach="material" color="#87CEEB" />
            </Text3D>
          </>
        )}

        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Home;