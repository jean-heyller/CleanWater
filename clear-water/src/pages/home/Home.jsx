import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Box } from "@react-three/drei";
import Button3D from "../../component/button-madera/Button3D";
import Fish3D from "../../component/fish/Fish3D";
import { useNavigate } from "react-router-dom";
import sound from "/audio/sound_home.mp3";

const Home = () => {
   const audio = new Audio(sound);
    const navigate = useNavigate();
    
    const handleButtonClick = (buttonText) => {
        alert(`Button ${buttonText} clicked!`);
    };

    const handleStartClick = () => {
        navigate('/ocean');
    };

    const handleSoundClick = () => {
        audio.play();
    };

    return (
        <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <directionalLight position={[0, 5, 3]} intensity={1} />
                <Text3D
                    position={[-6.5, 3, 1]}
                    font="/fonts/3d/blue-ocean.json"
                    size={1}
                    height={0.2}
                >
                    Clean Water Welcome
                    <meshStandardMaterial attach="material" color="#87CEEB"/>
                </Text3D>
                <Button3D position={[-0.9, 1, 0]} onClick={handleStartClick} text="Start" />
                <Button3D position={[0.5, -1, 0]} onClick={() => handleButtonClick('2')} text="Scores" />
                <Button3D position={[-0.9, -3, 0]} onClick={() => handleButtonClick('3')} text="Exit" />
                <Button3D position={[-7, 1.5, 0]} onClick={handleSoundClick} text="click me" />
                
                <Box position={[0, -1, -0.1]} args={[0.1, 6, 0.1]}>
                    <meshStandardMaterial attach="material" color="saddlebrown" />
                </Box>
                <Fish3D position={[-3, 0, 0]} />
                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default Home;
