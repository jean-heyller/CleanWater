import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { TextureLoader, RepeatWrapping } from 'three';
import { OrbitControls, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';

const Bubble = ({ moveUp }) => {
  const bubbleRef = useRef();
  const [positionY, setPositionY] = useState(-1);

  useEffect(() => {
    bubbleRef.current.position.y = positionY;
    bubbleRef.current.position.x = Math.random() * 30 - 15;
    bubbleRef.current.position.z = Math.random() * 30 - 15;
  }, []);

  useFrame(() => {
    if (bubbleRef.current) {
      if (moveUp) {
        const newY = positionY + 0.01;
        setPositionY(newY);
        bubbleRef.current.position.y = newY;
      }

      if (positionY > 15) {
        setPositionY(-1);
        bubbleRef.current.position.x = Math.random() * 30 - 15;
        bubbleRef.current.position.z = Math.random() * 30 - 15;
      }
    }
  });

  return (
    <mesh ref={bubbleRef}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshStandardMaterial color="lightblue" transparent opacity={0.8} />
    </mesh>
  );
};

const Floor = () => {
  const texture = useLoader(TextureLoader, '/texture/playa.jpg');
  texture.wrapS = texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <mesh rotation-x={-Math.PI / 2} position-y={-0.1} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshLambertMaterial map={texture} />
    </mesh>
  );
};

const Background = () => {
  const texture = useLoader(TextureLoader, '/texture/fondo_marino.jpg');

  return (
    <>
      <mesh position={[0, 130, -200]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[-100, 130, -100]} rotation={[0, Math.PI / 2, 0]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[100, 130, -100]} rotation={[0, -Math.PI / 2, 0]} scale={[1, 1, 1]}>
        <planeGeometry args={[400, 400]} />
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

const CameraController = () => {
  const controlsRef = useRef();

  return (
    <OrbitControls
      ref={controlsRef}
      enableZoom={true}
      enablePan={true}
      enableRotate={true}
      maxPolarAngle={Math.PI / 2.5}
      minPolarAngle={Math.PI / 4}
      maxAzimuthAngle={Math.PI / 4}
      minAzimuthAngle={-Math.PI / 4}
      maxDistance={35}
      minDistance={5}
    />
  );
};

const FishModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models-3d/neon.glb');
  return <primitive object={scene} position={[0, 0, 0]} scale={[3, 3, 3]} castShadow />;
};

const PlantasModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models-3d/plantas.glb');
  return <primitive object={scene} position={[0, 0, 0]} scale={[8, 8, 8]} castShadow />;
};

const OceanAcidificationText = () => {
  const text = `La acidificación del océano es un fenómeno que ocurre 
cuando el agua del mar absorbe dióxido de carbono (CO2) 
de la atmósfera, lo que provoca una disminución en el pH 
del agua. Este proceso afecta gravemente a los ecosistemas 
marinos, ya que organismos como los corales y los moluscos 
dependen de un ambiente más alcalino para formar sus 
estructuras calcáreas. Con la reducción del pH, estos 
organismos se debilitan, lo que altera la cadena alimentaria 
y afecta a la biodiversidad marina. La acidificación es 
una consecuencia directa del cambio climático y requiere 
una acción urgente para mitigar su impacto en los océanos.`;

  const positionX = -5;  
  const positionZ = -50; 
  return (
    <>
      <mesh position={[positionX, 17, positionZ]}>
        <planeGeometry args={[60, 29]} />
        <meshBasicMaterial color="black" />
      </mesh>
      
      <Text
        position={[positionX, 17, -45]}
        fontSize={1.5}
        color="white"
        anchorX="center"
        anchorY="middle"
        lineHeight={1.2}
      >
        {text}
      </Text>
    </>
  );
};

const InstructionText = () => {
  const text = "Presiona 'P' o haz clic para hacer subir las burbujas";

  return (
    <Text
      position={[-5, 3, 19]}
      fontSize={0.5}
      color="red"
      anchorX="center"
      anchorY="middle"
      lineHeight={1.5}
    >
      {text}
    </Text>
  );
};

// Componente para el título 3D "Clear Water"
const Title = () => {
  return (
    <Text
      position={[-40, 15, -25]} // Ajusta la posición para que se vea bien
      fontSize={5}
      color="Black"
      anchorX="center"
      anchorY="middle"
      maxWidth={15}
      lineHeight={1.2}
      letterSpacing={0.1}
      rotation={[0, Math.PI / 4, 0]} // Rotación opcional para un toque 3D interesante
    >
      CLEAR WATER
    </Text>
  );
};

// Agregar el botón de redirección
const RedirectButton = () => {
  const handleButtonClick = () => {
    // Redirige al usuario al video de YouTube
    window.open('https://www.youtube.com/watch?v=HOIB_Yda8Xo', '_blank');
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        position: 'absolute',
        top: '20px',
        left: '90%',
        transform: 'translateX(-50%)',
        padding: '10px 20px',
        backgroundColor: '#ff2d00',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Reflexión
    </button>
  );
};

const Scene = () => {
  const [moveBubbles, setMoveBubbles] = useState(false);

  // Manejar eventos de teclado
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'p' || event.key === 'P') {
        setMoveBubbles(true);
      }
    };

    // Listener de la tecla "P"
    window.addEventListener('keydown', handleKeyDown);

    // Limpiar el listener cuando se desmonte el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Manejar el evento de clic
  const handleClick = () => {
    setMoveBubbles(true);
  };

  return (
    <>
      <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [0, 10, 25], fov: 75 }} shadows onClick={handleClick}>
        <ambientLight intensity={0.5} />
        <pointLight 
          position={[10, 10, 10]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <directionalLight 
          position={[-5, 10, 5]} 
          intensity={1} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <Background />
        <Floor />
        <FishModel />
        <PlantasModel />
        <OceanAcidificationText />
        <InstructionText />
        <Title /> 
        {Array.from({ length: 20 }).map((_, index) => (
          <Bubble key={index} moveUp={moveBubbles} />
        ))}
        <CameraController />
      </Canvas>
      <RedirectButton />
    </>
  );
};

export default Scene;
