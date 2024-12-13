/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Text3D } from "@react-three/drei";
import { useDispatch } from "react-redux";
import { setRewards } from "../../redux/RewardsSlice";
import Controls from "../../component/controls/Controls";

import { useTypeStore } from "../../stores/store-type-selected";
import FunctionButtons from "./function-buttons/FunctionButtons";
import { useState } from "react";

import Desert from "../water-shortage/models-3D/desert/Desert";

import * as THREE from "three";
import UserDao from "../../daos/UserDao";

import { useEffect } from "react";

const TexturedSphere = ({ position, onClick }) => {
  const texture = useLoader(TextureLoader, "/img/textura.jpg");
  return (
    <mesh position={position} onClick={onClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Home = () => {
  const { typeProblem } = useTypeStore();
  const [introState, setIntroState] = useState(false);
  const [hoveredObject, setHoveredObject] = useState(null);
  const dispatch = useDispatch();

  const Background = ({ onClick }) => {
    const texture = useLoader(TextureLoader, "/texture/fondo_marino.jpg");

    return (
      <mesh
        position={[120, -55, -50]}
        scale={[0.25, 0.25, 0.1]}
        onClick={onClick}
      >
        <boxGeometry args={[100, 100, 100]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    );
  };

  const handleClick = (object) => {
    setHoveredObject(object);
  };

  useEffect(() => {
    const fetchRewards = async () => {
      const result = await UserDao.getAllScores();
      if (result.success) {
        dispatch(setRewards(result.data));
      } else {
        console.error("Failed to fetch rewards");
      }
    };

    fetchRewards();
  }, [dispatch]);
  return (
    <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen">
      <Canvas camera={{ position: [0, 2, 4], fov: 110 }}>
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
        <FunctionButtons state={introState} setState={setIntroState} />
        {introState && (
          <>
            <Desert
              position={[11.5, 2, 0]}
              rotation={[Math.PI / 55, 0, 0]}
              scale={0.6}
              onClick={() => handleClick("Desert")}
            />
            <Background onClick={() => handleClick("Background")} />
            <TexturedSphere
              position={[8, -0.0, 0]}
              scale={[0.01, 0.01, 0.01]}
              onClick={() => handleClick("TexturedSphere")}
            />
          </>
        )}
        {hoveredObject && (
          <Text3D
            position={[-6, 2, 0]}
            font="/fonts/3d/blue-ocean.json"
            size={0.35}
            height={0.0}
            anchorX="left"
            anchorY="middle"
          >
            {hoveredObject === "Desert" &&
              "La escasez de agua ocurre cuando la demanda \nsupera la disponibilidad o la calidad del agua dulce \n. Sus causas incluyen el cambio climático, la contaminación \n, el uso excesivo y el crecimiento poblacional. \n" +
                "Esto afecta el acceso a agua potable, la producción de alimentos,\n la biodiversidad y genera problemas de salud y conflictos \n por recursos. " +
                "Para enfrentarla, se necesitan medidas \n como el uso eficiente, la protección de fuentes\n hídricas y políticas sostenibles."}
            {hoveredObject === "TexturedSphere" &&
              "La contaminación del agua ocurre cuando sustancias dañinas,\n como desechos industriales, agrícolas y domésticos, alteran su calidad. \nEsto afecta ríos, lagos, océanos y acuíferos.\n " +
                "Las consecuencias incluyen la pérdida de biodiversidad\n, la escasez de agua potable y problemas de salud pública \n, como enfermedades transmitidas por el agua.\n " +
                "Es crucial reducir la contaminación mediante el tratamiento de desechos, \n regulaciones más estrictas y la promoción de prácticas sostenibles."}
            {hoveredObject === "Background" &&
              "La acidificación del océano es el aumento de la acidez del agua \n marina debido a la absorción de dióxido de carbono (CO₂) de la atmósfera. \n Esto reduce el pH del agua y altera su equilibrio químico.\n " +
                "Las consecuencias incluyen el debilitamiento de corales,\n moluscos y otras especies marinas que dependen del calcio, \n lo que afecta a los ecosistemas \n y a las comunidades que dependen de ellos. \n " +
                "Para mitigarla, es esencial reducir las emisiones de CO₂ \n mediante energías limpias y prácticas sostenibles."}
            <meshStandardMaterial attach="material" color="#000000" />
          </Text3D>
        )}
        <Controls element={typeProblem} target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
};

export default Home;
