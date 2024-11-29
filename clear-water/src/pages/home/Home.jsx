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

  const [showInfo, setShowInfo] = useState(false);

  const handleButtonClick = (buttonText) => {
    alert(`Button ${buttonText} clicked!`);
  };

  const handleStartClick = () => {
    navigate("/ocean");
  };

  const handleSoundClick = () => {
    audio.play();
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
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
          <meshStandardMaterial attach="material" color="#87CEEB" />
        </Text3D>
        <Button3D position={[-0.9, 1, 0]} onClick={handleStartClick} text="Start" />
        <Button3D position={[0.5, -1, 0]} onClick={() => handleButtonClick("2")} text="Scores" />
        <Button3D position={[-0.9, -3, 0]} onClick={() => handleButtonClick("3")} text="Exit" />
        <Button3D position={[-7, 1.5, 0]} onClick={handleSoundClick} text="click me" />

        <Box position={[0, -1, -0.1]} args={[0.1, 6, 0.1]}>
          <meshStandardMaterial attach="material" color="saddlebrown" />
        </Box>
        <Fish3D position={[-3, 0, 0]} />
        <OrbitControls />
      </Canvas>

      {/* Botón para mostrar/ocultar la información - posicionado en la esquina inferior izquierda */}
      <div style={{ position: "absolute", bottom: "20px", left: "20px" }}>
        <button
          onClick={toggleInfo}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#87CEEB",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {showInfo ? "Problemas tratados" : "Problemas tratados"}
        </button>
      </div>

      {/* Cuadro con la información de los problemas ambientales */}
      {showInfo && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            padding: "20px",
            borderRadius: "10px",
            width: "300px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <button
            onClick={toggleInfo}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              fontSize: "20px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            &#10006; {/* X para cerrar */}
          </button>

          <h3 style={{ textAlign: "center", color: "#333" }}>Problemáticas Ambientales</h3>
          <p style={{ fontSize: "14px", color: "#333" }}>
            <strong>Contaminación del Agua:</strong> La contaminación del agua es un problema global
            que afecta nuestros ríos, mares y lagos. El vertido de desechos industriales y plásticos
            pone en peligro la salud humana y la vida marina.
          </p>
          <p style={{ fontSize: "14px", color: "#333" }}>
            <strong>Acidificación de los Océanos:</strong> El CO2 se disuelve en el agua del mar,
            afectando los ecosistemas marinos. Los corales se ven debilitados y muchas especies
            marinas se ven amenazadas por este fenómeno.
          </p>
          <p style={{ fontSize: "14px", color: "#333" }}>
            <strong>Escasez de Agua:</strong> Millones de personas en todo el mundo carecen de
            acceso a agua potable. La escasez de agua afecta la salud, la economía y la vida diaria
            de muchas comunidades.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
