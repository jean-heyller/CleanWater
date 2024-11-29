import React, { useState, useMemo, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text3D,
  OrbitControls,
  Environment,
  KeyboardControls,
  Text,
} from "@react-three/drei";
import Ocean3d from "../../component/ocean/Ocean3d";
import { useNavigate } from "react-router-dom";
import { Vector3 } from "three";
import sound from "/audio/mar.mp3";

const Controls = {
  forward: "forward",
  back: "back",
  left: "left",
  right: "right",
  jump: "jump",
};

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#FF8C33",
  "#8CFF33",
  "#338CFF",
  "#FF338C",
  "#8C33FF",
  "#33FF8C",
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#A133FF",
  "#33FFF5",
  "#FF8C33",
  "#8CFF33",
];

const audio = new Audio(sound);

const CameraController = ({ cameraPosition, controlCamera }) => {
  const cameraRef = useRef();

  useFrame(({ camera }) => {
    if (controlCamera) {
      camera.position.lerp(cameraPosition, 0.05); // Smooth transition
      camera.lookAt(0, 0, 0); // Ensure the camera is looking at the center
    }
  });

  return null;
};

export const OceanGarbage = () => {
  const [envRotation, setEnvRotation] = useState([0, 0, 0]);
  const [rotation, setRotation] = useState([0, Math.PI, 0]);
  const [leftPressed, setLeftPressed] = useState(false);
  const [rightPressed, setRightPressed] = useState(false);
  const [upPressed, setUpPressed] = useState(false);
  const [downPressed, setDownPressed] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [isPointerOver, setIsPointerOver] = useState(false);
  const [cameraPosition, setCameraPosition] = useState(
    new Vector3(150, 150, -550)
  );
  const [controlCamera, setControlCamera] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleSoundClick = () => {
    audio.play();
  };

  const handleSoundStop = () => {
    audio.pause();
  };

  const rotateLeft = () => {
    const newRotation = [rotation[0], rotation[1] - Math.PI / 8, rotation[2]];
    setRotation(newRotation);
    console.log("Rotation:", newRotation);
  };

  const rotateRight = () => {
    const newRotation = [rotation[0], rotation[1] + Math.PI / 8, rotation[2]];
    setRotation(newRotation);
    console.log("Rotation:", newRotation);
  };

  const rotateUp = () => {
    const newRotation = [rotation[0] - Math.PI / 8, rotation[1], rotation[2]];
    setRotation(newRotation);
    console.log("Rotation:", newRotation);
  };

  const rotateDown = () => {
    const newRotation = [rotation[0] + Math.PI / 8, rotation[1], rotation[2]];
    setRotation(newRotation);
    console.log("Rotation:", newRotation);
  };

  const map = useMemo(
    () => [
      { name: Controls.forward, keys: ["ArrowUp", "KeyW"] },
      { name: Controls.back, keys: ["ArrowDown", "KeyS"] },
      { name: Controls.left, keys: ["ArrowLeft", "KeyA"] },
      { name: Controls.right, keys: ["ArrowRight", "KeyD"] },
      { name: Controls.jump, keys: ["Space"] },
    ],
    []
  );

  const handleKeyChange = (name, pressed) => {
    console.log(`Key: ${name}, Pressed: ${pressed}`);
    if (name === Controls.left) {
      setLeftPressed(pressed);
    } else if (name === Controls.right) {
      setRightPressed(pressed);
    } else if (name === Controls.forward) {
      setUpPressed(pressed);
    } else if (name === Controls.back) {
      setDownPressed(pressed);
    } else if (name === Controls.jump) {
      setCameraPosition(new Vector3(150, 150, -550));
      setIsJumping(pressed);
      setControlCamera(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (leftPressed) {
        rotateLeft();
      }
      if (rightPressed) {
        rotateRight();
      }
      if (upPressed) {
        rotateUp();
      }
      if (downPressed) {
        rotateDown();
      }
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [leftPressed, rightPressed, upPressed, downPressed]);

  useEffect(() => {
    if (isJumping) {
      audio.pause();
    }
  }, [isJumping]);

  useEffect(() => {
    let colorChangeInterval;
    if (isPointerOver) {
      colorChangeInterval = setInterval(() => {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
      }, 500); // Change color every 500ms
    } else {
      clearInterval(colorChangeInterval);
    }
    return () => clearInterval(colorChangeInterval);
  }, [isPointerOver]);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/recycling");
  };

  const handleButtonSolutionClick = () => {
    navigate("/solutionGarbage");
  };

  const handle3DButtonClick = () => {
    setCameraPosition(new Vector3(50, 50, -110)); // Change to the desired position
    setControlCamera(true); // Enable camera control
  };

  return (
    <KeyboardControls map={map} onChange={handleKeyChange}>
      <div className="bg-[url('/img/basura.webp')] bg-cover bg-center h-screen flex">
        <div className="w-1/2 p-8 text-white overflow-y-auto">
          <h1 className="text-4xl font-bold mb-4">LA CONTAMINACIÓN DEL AGUA</h1>
          <p className="text-lg font-semibold mb-4">
            La contaminación del agua es uno de los problemas ambientales más
            graves y urgentes a nivel global, afectando mares, ríos y cuerpos de
            agua en todos los continentes. Este fenómeno se produce cuando
            sustancias tóxicas, desechos industriales, plásticos y productos
            químicos son vertidos en el agua, alterando sus propiedades
            naturales y poniendo en riesgo a los ecosistemas acuáticos y a las
            especies que dependen de ellos, incluidos los seres humanos.
          </p>

          <ul className="list-disc list-inside text-lg font-semibold mb-4">
            <li>
              <a
                href="https://www.iberdrola.com/sostenibilidad/contaminacion-del-agua"
                className="text-white-400 underline"
                target="_blank"
              >
                Contaminación de los océanos: causas y soluciones
              </a>
            </li>
            <li>
              <a
                href="https://www.nrdc.org/es/stories/contaminacion-agua-todo-lo-necesitas-saber"
                className="text-white-400 underline"
                target="_blank"
              >
                La contaminación en los ríos: impacto y soluciones
              </a>
            </li>
            <li>
              <a
                href="https://www.nationalgeographic.es/medio-ambiente/contaminacion-del-agua"
                className="text-white-400 underline"
                target="_blank"
              >
                Impacto de los plásticos en los océanos y el medioambiente
                marino
              </a>
            </li>
            <li>
              <a
                href="https://es.wikipedia.org/wiki/Contaminaci%C3%B3n_h%C3%ADdrica"
                className="text-white-400 underline"
                target="_blank"
              >
                Efectos de la contaminación del agua en la salud humana
              </a>
            </li>
          </ul>
          <p className="text-lg font-semibold">
            Estos enlaces proporcionan información detallada sobre el tema y
            cubren perspectivas desde el impacto ambiental hasta las
            repercusiones sociales y de salud, que ayudan a entender la magnitud
            del problema y las acciones que se están tomando para abordarlo.
          </p>
          <button
            className="mt-5 mr-3 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold"
            onClick={handleButtonClick}
          >
            Siguiente problema ambiental
          </button>
          <button
            className="mt-5 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold"
            onClick={handleButtonSolutionClick}
          >
            Solución
          </button>
          <button
            className="ml-4 mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold"
            onClick={rotateLeft}
          >
            Girar a la Izquierda
          </button>
          <button
            className="ml-4 mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold"
            onClick={rotateRight}
          >
            Girar a la Derecha
          </button>
        </div>
        <div className="w-1/2 h-full">
          <Canvas shadows camera={{ position: [150, 150, -550], fov: 50 }}>
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
            <pointLight position={[110, 30, -290]} intensity={0.5} castShadow /> {/* Luz original */}
        
           
            <Text3D
              position={[130, 50, -150]}
              rotation={[0, Math.PI, 0]}
              font="/fonts/3d/blue-ocean.json"
              size={20}
              height={0.2}
              castShadow
              receiveShadow
            >
              Nuestro Hermoso Océano
              <meshStandardMaterial
                attach="material"
                color={colors[colorIndex]}
                castShadow
                receiveShadow
              />
            </Text3D>
            <Ocean3d
              scale={[0.1, 0.1, 0.1]}
              rotation={rotation}
              onPointerOver={handleSoundClick}
              onPointerOut={handleSoundStop}
              castShadow
              receiveShadow
            />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              onStart={() => setControlCamera(false)}
            />
            <mesh
              position={[0, -185, -90]}
              scale={[15, 5, 5]}
              onClick={handle3DButtonClick}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "auto")}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="orange"
                transparent={true}
                opacity={0}
              />
              <Text
                position={[0, 0, 0.6]} // Adjust position to place text in front of the box
                fontSize={2} // Adjust font size as needed
                color={colors[colorIndex]} // Text color
                anchorX="center" // Anchor text horizontally
                anchorY="middle"
                rotation={[0, Math.PI, 0]} // Anchor text vertically
              >
                {"    Contamina \n nuestro Océano \n             ▶"}
              </Text>
            </mesh>
            <mesh
              rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -160, 0]}
              receiveShadow
            >
              <planeGeometry args={[200, 200]} />
              <shadowMaterial transparent={true} opacity={0.1} />
            </mesh>

            <mesh
              position={[0, -8, -0]} // Ajusta la posición según sea necesario
              scale={[2, 2, 2]}
              onPointerOver={() => (document.body.style.cursor = "pointer")}
              onPointerOut={() => (document.body.style.cursor = "auto")}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="orange"
                transparent={true}
                opacity={0}
              />
              <Text
                position={[0, 0, 0.6]} // Ajusta la posición para colocar el texto frente a la caja
                fontSize={1.5} // Ajusta el tamaño de la fuente según sea necesario
                color="white" // Color del texto
                anchorX="center" // Ancla el texto horizontalmente
                anchorY="middle" // Ancla el texto verticalmente
                rotation={[0, Math.PI, 0]} // Rotación del texto
              >
                {
                  "Sabías que la contaminación del agua \n afecta a más de 1.2 mil millones de personas \n en todo el mundo? \n Cada año, millones de toneladas de basura \n y productos químicos tóxicos \n son vertidos en nuestros océanos, \n ríos y lagos, poniendo en peligro \n la vida marina y nuestra salud. \n ¡Es hora de actuar y proteger \n nuestros recursos hídricos!"
                }
              </Text>
            </mesh>

            <CameraController
              cameraPosition={cameraPosition}
              controlCamera={controlCamera}
            />
            <Environment
              background={true}
              files={"/cubemap/ocean/kloppenheim_06_puresky_2k.hdr"}
            />
          </Canvas>
        </div>
      </div>
    </KeyboardControls>
  );
};