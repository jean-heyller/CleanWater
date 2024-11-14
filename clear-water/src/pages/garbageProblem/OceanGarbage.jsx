import React, { useState, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Text3D, OrbitControls, Environment, KeyboardControls } from "@react-three/drei";
import Ocean3d from "../../component/ocean/Ocean3d";
import { useNavigate } from "react-router-dom";

const Controls = {
    forward: 'forward',
    back: 'back',
    left: 'left',
    right: 'right',
    jump: 'jump'
};

const colors = [
    "#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#A133FF",
    "#33FFF5", "#FF8C33", "#8CFF33", "#338CFF", "#FF338C",
    "#8C33FF", "#33FF8C", "#FF5733", "#33FF57", "#3357FF",
    "#FF33A1", "#A133FF", "#33FFF5", "#FF8C33", "#8CFF33"
];

export const OceanGarbage = () => {
    const [envRotation, setEnvRotation] = useState([0, 0, 0]);
    const [rotation, setRotation] = useState([0, Math.PI, 0]);
    const [leftPressed, setLeftPressed] = useState(false);
    const [rightPressed, setRightPressed] = useState(false);
    const [upPressed, setUpPressed] = useState(false);
    const [downPressed, setDownPressed] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);
    const [isPointerOver, setIsPointerOver] = useState(false);

    const rotateLeft = () => {
        const newRotation = [rotation[0], rotation[1] - Math.PI / 8, rotation[2]];
        setRotation(newRotation);
        console.log('Rotation:', newRotation);
    };

    const rotateRight = () => {
        const newRotation = [rotation[0], rotation[1] + Math.PI / 8, rotation[2]];
        setRotation(newRotation);
        console.log('Rotation:', newRotation);
    };

    const rotateUp = () => {
        const newRotation = [rotation[0] - Math.PI / 8, rotation[1], rotation[2]];
        setRotation(newRotation);
        console.log('Rotation:', newRotation);
    };

    const rotateDown = () => {
        const newRotation = [rotation[0] + Math.PI / 8, rotation[1], rotation[2]];
        setRotation(newRotation);
        console.log('Rotation:', newRotation);
    };

    const map = useMemo(() => [
        { name: Controls.forward, keys: ['ArrowUp', 'KeyW'] },
        { name: Controls.back, keys: ['ArrowDown', 'KeyS'] },
        { name: Controls.left, keys: ['ArrowLeft', 'KeyA'] },
        { name: Controls.right, keys: ['ArrowRight', 'KeyD'] },
        { name: Controls.jump, keys: ['Space'] },
    ], []);

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
                        químicos son vertidos en el agua, alterando sus propiedades naturales
                        y poniendo en riesgo a los ecosistemas acuáticos y a las especies que
                        dependen de ellos, incluidos los seres humanos.
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
                                Impacto de los plásticos en los océanos y el medioambiente marino
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
                        cubren perspectivas desde el impacto ambiental hasta las repercusiones
                        sociales y de salud, que ayudan a entender la magnitud del problema y
                        las acciones que se están tomando para abordarlo.
                    </p>
                    <button
                        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold"
                        onClick={handleButtonClick}
                    >
                        Siguiente problema ambiental
                    </button>
                    <button className="ml-4 mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold" onClick={rotateLeft}>Girar a la Izquierda</button>
                    <button className="ml-4 mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 font-bold" onClick={rotateRight}>Girar a la Derecha</button>
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
                        <pointLight position={[-10, -10, -10]} intensity={0.5} />
                        <Text3D
                            position={[130, 175, 0]}
                            rotation={[0, Math.PI, 0]}
                            font="/fonts/3d/blue-ocean.json"
                            size={20}
                            height={0.2}
                        >
                            Nuestro Hermoso Océano
                            <meshStandardMaterial attach="material" color={colors[colorIndex]} />
                        </Text3D>
                        <Ocean3d
                            scale={[0.1, 0.1, 0.1]}
                            rotation={rotation}
                            onPointerOver={() => setIsPointerOver(true)}
                            onPointerOut={() => setIsPointerOver(false)}
                        />
                        <OrbitControls />
                        <Environment background={true} files={"/cubemap/ocean/kloppenheim_06_puresky_2k.hdr"} rotation={envRotation} />
                    </Canvas>
                </div>
            </div>
        </KeyboardControls>
    );
};