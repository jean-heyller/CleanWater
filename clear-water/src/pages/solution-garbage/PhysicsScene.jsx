import React, { useRef, useState, useEffect } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Physics, useBox, usePlane, useSphere } from "@react-three/cannon";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import robotoFont from "three/examples/fonts/helvetiker_regular.typeface.json";

import Solution from "../../component/solution/Solution";
import backgroundImage from "/img/rio.webp"; // Importa tu imagen

extend({ TextGeometry });

const Plane = () => {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }));
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[200, 100]} />
      <meshStandardMaterial color="lightblue" />
    </mesh>
  );
};

const Ramp = () => {
  const [ref] = useBox(() => ({
    rotation: [0, 0, -Math.PI / 5],
    position: [-4, 8, 0],
  }));
  const font = new FontLoader().parse(robotoFont);
  return (
    <mesh ref={ref} receiveShadow>
      <textGeometry args={["Solucion", { font, size: 1, height: 0.5 }]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const Ball = ({ position }) => {
  const [ref] = useSphere(() => ({ mass: 5, position }));
  return (
    <mesh ref={ref} castShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const Text = ({ children, position, onCollide }) => {
  const [ref] = useBox(() => ({
    mass: 1,
    position,
    onCollide: (e) => {
      if (e.body.userData.type === "ball") {
        onCollide(ref);
      }
    },
  }));
  const font = new FontLoader().parse(robotoFont);
  return (
    <mesh ref={ref} castShadow>
      <textGeometry args={[children, { font, size: 1, height: 0.5 }]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const TextRamp = () => {
  const [ref] = useBox(() => ({
    rotation: [0, 0, -Math.PI / 5],
    position: [-4, 8, 0],
  }));
  const font = new FontLoader().parse(robotoFont);
  return (
    <mesh ref={ref} receiveShadow>
      <textGeometry args={["Solucion", { font, size: 2, height: 0.5 }]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
};

const ExplanationText = () => {
  const font = new FontLoader().parse(robotoFont);
  return (
    <mesh position={[-10, 30, 5]} receiveShadow>
      <textGeometry args={["CAUSAS \n Los rios funcionan como autopista naturales \n que transportan el agua hacia el mar. \n La basura, al ser arrojada a un rio o sus afluentes,\n es arrastrada por las corrientes fluviales", { font, size: 3, height: 1 }]} />
      <meshStandardMaterial color="skyblue" />
    </mesh>
  );
};

export const PhysicsScene = () => {
  const [texts, setTexts] = useState([
    { id: 1, position: [2, 2, 0], text: "Contaminacion a los rios" },
    { id: 2, position: [2, 3, 0], text: "Contaminacion a los mares" },
    { id: 3, position: [2, 4, 0], text: "Contaminaci0n a los lagos" },
  ]);

  const cameraRef = useRef();

  const [ballPosition, setBallPosition] = useState(null);
  const [showModels, setShowModels] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleButtonClick = () => {
    setShowModels(true);
    setShowSolution(false);
    setShowExplanation(false);
    if (cameraRef.current) {
      cameraRef.current.position.set(0, 20, 50);
      cameraRef.current.rotation.set(0, 0, 0);
    }

    setTimeout(() => {
      setBallPosition([-4, 8, 0]);
    }, 5000);
  };

  useEffect(() => {
    if (ballPosition) {
      const timer = setTimeout(() => {
        setShowModels(false);
        setShowSolution(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [ballPosition]);

  const handleCollide = (ref) => {
    if (ref.current) {
      // Aplicar impulso
      ref.current.applyImpulse([5, 10, 0], [0, 0, 0]);

      // Eliminar el texto después de un tiempo
      setTimeout(() => {
        setTexts((prev) => prev.filter((t) => t.ref !== ref));
      }, 1000);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        console.log('Space key pressed');
        if (cameraRef.current) {
          console.log('Camera Position:', cameraRef.current.position);
          console.log('Camera Rotation:', cameraRef.current.rotation);
        } else {
          console.log('Camera reference is null');
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.rotation.set(57.28378400539587, 34.60628399680841, 0.02723815537228125);
    }
  }, []);

  return (
    <div className="relative h-screen w-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
       <button
        onClick={handleButtonClick}
        className="bg-sky-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform hover:scale-105 active:scale-95"
      >
        Solucion
      </button>
      <Canvas shadows style={{ height: "100vh", width: "100vw" }} rotation={[0, 0, 5]}>
        <Solution position={[-40, 20, 5]}></Solution>
        {showExplanation && <ExplanationText />}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[-67.24906855831033, 40.03176838798377, 124.6084293552102]}
        />
        <OrbitControls />
        <Physics gravity={[0, -30, 0]}>
          <Plane />
          {showModels && (
            <>
              <TextRamp />
              {ballPosition && <Ball position={ballPosition} />}
              {texts.map((t) => (
                <Text key={t.id} position={t.position} onCollide={handleCollide}>
                  {t.text}
                </Text>
              ))}
            </>
          )}
        </Physics>
      </Canvas>
      {showSolution && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
          <h2>Solución a la Contaminación del Agua</h2>
          <p>Una solución efectiva para reducir la contaminación del agua es implementar sistemas de tratamiento de aguas residuales y promover prácticas agrícolas sostenibles.</p>
        </div>
      )}
    </div>
  );
};

export default PhysicsScene;