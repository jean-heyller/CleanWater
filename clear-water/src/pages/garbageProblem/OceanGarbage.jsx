/* eslint-disable react/no-unknown-property */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import Ocean3d from "../../component/ocean/Ocean3d";
import { useNavigate } from "react-router-dom";

export const OceanGarbage = () => {
  return (
    <div className="bg-[url('/img/ocean.webp')] bg-cover bg-center h-screen flex">
      <div className="w-1/2 p-8 text-black overflow-y-auto bg-white bg-opacity-50">
        <h1 className="text-4xl mb-4">LA CONTAMINACIÓN DEL AGUA</h1>
        <p className="text-lg mb-4">
          La contaminación del agua es uno de los problemas ambientales más
          graves y urgentes a nivel global, afectando mares, ríos y cuerpos de
          agua en todos los continentes. Este fenómeno se produce cuando
          sustancias tóxicas, desechos industriales, plásticos y productos
          químicos son vertidos en el agua, alterando sus propiedades naturales
          y poniendo en riesgo a los ecosistemas acuáticos y a las especies que
          dependen de ellos, incluidos los seres humanos.
        </p>
        <p className="text-lg mb-4">
          Los ríos, que a menudo son las principales fuentes de agua dulce para
          la población, se ven contaminados principalmente por desechos
          domésticos, industriales y agrícolas. Los contaminantes de los ríos
          frecuentemente llegan a los mares, extendiendo el problema a nivel
          oceánico y alterando los ecosistemas marinos en un efecto acumulativo
          y devastador. En los océanos, los microplásticos, derrames de petróleo
          y productos químicos pesados causan daños irreversibles a especies
          marinas y a la biodiversidad global. Además, estas sustancias llegan
          eventualmente a la cadena alimentaria humana, afectando nuestra salud.
        </p>
        <p className="text-lg mb-4">
          Este problema requiere un esfuerzo conjunto de gobiernos, empresas y
          ciudadanos, así como soluciones innovadoras para el tratamiento de
          aguas y la reducción de la contaminación en sus diversas formas.
        </p>
        <p className="text-lg mb-4">
          Aquí te comparto algunos enlaces donde puedes leer más en detalle
          sobre las causas y consecuencias de la contaminación de mares y ríos,
          además de conocer las iniciativas actuales para combatir este
          problema:
        </p>
        <ul className="list-disc list-inside text-lg mb-4">
          <li>
            <a
              href="https://www.example.com/ocean-pollution"
              className="text-blue-400 underline"
            >
              Contaminación de los océanos: causas y soluciones
            </a>
          </li>
          <li>
            <a
              href="https://www.example.com/river-pollution"
              className="text-blue-400 underline"
            >
              La contaminación en los ríos: impacto y soluciones
            </a>
          </li>
          <li>
            <a
              href="https://www.example.com/plastic-impact"
              className="text-blue-400 underline"
            >
              Impacto de los plásticos en los océanos y el medioambiente marino
            </a>
          </li>
          <li>
            <a
              href="https://www.example.com/water-pollution-health"
              className="text-blue-400 underline"
            >
              Efectos de la contaminación del agua en la salud humana
            </a>
          </li>
        </ul>
        <p className="text-lg">
          Estos enlaces proporcionan información detallada sobre el tema y
          cubren perspectivas desde el impacto ambiental hasta las repercusiones
          sociales y de salud, que ayudan a entender la magnitud del problema y
          las acciones que se están tomando para abordarlo.
        </p>
      </div>
      <div className="w-1/2 h-full">
        <Canvas shadows camera={{ position: [30, 30, -30], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[10, 10, 10]}
            intensity={1}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />
          <Ocean3d scale={[0.1, 0.1, 0.1]} /> {/* Ajusta la escala aquí */}
          <OrbitControls /> {/* Añade controles de órbita */}
          <Environment preset="sunset" /> {/* Añade un entorno HDRI */}
        </Canvas>
      </div>
    </div>
  );
};
