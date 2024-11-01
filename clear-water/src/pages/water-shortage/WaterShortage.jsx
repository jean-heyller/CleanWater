/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Desert from "../../component3D/desert/Desert";
import { useCanvasParemeterStore } from "../../stores/use-canvas-parameter-store";

const WaterShortage = () => {
  const {
    cameraSettings,
    intensityAmbientLight,
    position,
    intensityDirectionalLight,
  } = useCanvasParemeterStore();

  return (
    <div className="bg-[url('/img/drought.jpg')] bg-cover bg-center h-screen flex">
      <div className="w-1/2 p-8 text-black overflow-y-auto bg-white bg-opacity-50">
        <h1 className="text-4xl mb-4">ESCASEZ DE AGUA</h1>
        <p className="text-lg mb-4">
          La escasez de agua es uno de los problemas más críticos que enfrenta
          nuestro planeta. El agua es esencial para la vida, y su falta puede
          tener consecuencias devastadoras para las comunidades, la agricultura
          y la biodiversidad.
        </p>
        <p className="text-lg mb-4">
          Es crucial que tomemos medidas para conservar el agua y asegurar su
          disponibilidad para las generaciones futuras. La gestión sostenible
          del agua y la concienciación sobre su importancia son pasos vitales
          para abordar este desafío global.
        </p>
        <p className="text-lg mb-4">
          Aquí te comparto algunos enlaces donde puedes leer más en detalle
          sobre las causas y consecuencias de la escasez de agua, además de
          conocer las iniciativas actuales para combatir este problema.
        </p>
      </div>
      <div className="w-1/2 h-full">
        <Canvas shadows camera={{ position: [30, 30, -30], fov: 50 }}>
          <ambientLight intensity={intensityAmbientLight} />
          <directionalLight
            position={position}
            intensity={intensityDirectionalLight}
          />
          <Desert scale={[18, 18, 18]} position={[80, -25, 18]} />
          <OrbitControls
            enableZoom={true}
            enableRotate={true}
            enablePan={true}
            minDistance={5}
            maxDistance={50}
            minPolarAngle={0}
            maxPolarAngle={Math.PI}
            minAzimuthAngle={-Infinity}
            maxAzimuthAngle={Infinity}
            dampingFactor={0.1}
          />
          <Environment
            ground={{
              height: 20,
              radius: 60,
              scale: 100,
            }}
            files={"/hdris/sky-water-shortage/sky-water-shortage.hdr"}
            background={true}
          />
        </Canvas>
      </div>
    </div>
  );
};

export default WaterShortage;
