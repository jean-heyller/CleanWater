/* eslint-disable react/no-unknown-property */
import { Canvas, useLoader, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect } from 'react';
import React from 'react';
import { TextureLoader, RepeatWrapping } from 'three';
import { OrbitControls, Text } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import { AnimationMixer } from 'three';
import { Clone } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';
import { AudioLoader, Audio } from 'three';
import { EffectComposer, Bloom, Noise } from '@react-three/postprocessing';
import { useNavigate } from "react-router-dom";


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

  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -0.1, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={ref} receiveShadow>
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

const BackgroundSound = () => {
  const audioRef = useRef();

  useEffect(() => {
    const audioLoader = new AudioLoader();
    audioLoader.load('/audio/mar.mp3', (buffer) => {
      const listener = new THREE.AudioListener();
      const sound = new Audio(listener);
      sound.setBuffer(buffer);
      sound.setLoop(true); 
      sound.setVolume(0.5); 
      sound.play(); 
      audioRef.current = sound;
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.stop();
        audioRef.current = null;
      }
    };
  }, []);

  return null;
};


const RockModel = () => {
  const { scene } = useLoader(GLTFLoader, '/models-3d/rock.glb');
  const [ref] = useBox(() => ({
    mass: 1,
    position: [-30, 50, 0],
    type: 'Dynamic',
  }));

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={[0.09, 0.09, 0.09]}
      castShadow
    />
  );
};

const FishModels = () => {
  const { scene, animations } = useLoader(GLTFLoader, '/models-3d/koi_fish.glb');
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length) {
      mixer.current = new AnimationMixer(scene);
      const action = mixer.current.clipAction(animations[0]);
      action.play();
    }
  }, [animations, scene]);

  useFrame((state, delta) => {
    if (mixer.current) {
      mixer.current.update(delta);
    }
  });

  return (
    <primitive
      object={scene}
      position={[0, 5, 0]}
      scale={[3, 3, 3]}
      castShadow
      receiveShadow
    />
  );
};


const PlantasModel = () => {
  const { scene, animations } = useLoader(GLTFLoader, '/models-3d/plantas.glb');
  const plantRef = useRef();

  if (!scene) return <div>Loading...</div>;

  return (
    <>
      <primitive
        object={scene}
        ref={plantRef}
        position={[0, 0, 0]}
        scale={[8, 8, 8]}
        castShadow
      />
      
      {plantRef.current && (
        <>
          <Clone
            object={plantRef.current}
            position={[20, 0, 0]}
          />
          <Clone
            object={plantRef.current}
            position={[-20, 0, 0]}
          />
          <Clone
            object={plantRef.current}
            position={[20, 0, -10]}
          />
         
        </>
      )}
    </>
  );
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

const OceanAcidificationSolutionText = () => {
  const text = `La solución para mitigar la acidificación del océano 
requiere esfuerzos globales y locales. Algunas acciones clave incluyen:
->> Reducción de las emisiones de CO2 a través de energías limpias y sostenibles.
->> Protección de los ecosistemas marinos, como los arrecifes de coral y los manglares, que ayudan a absorber CO2.
->> Restauración de ecosistemas marinos para fortalecer la resiliencia de las especies.
->> Promoción de políticas globales de conservación marina y acciones contra el cambio climático.`;

  return (
    <Html position={[200, 15, -200]}>
      <div
        style={{
          color: 'white',
          fontSize: '20px',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '15px',
          borderRadius: '8px',
          width: '300px',
          lineHeight: '1.5',
          whiteSpace: 'pre-line',
        }}
      >
        <h3 style={{ color: 'red' }}>Soluciones para la Acidificación de los Océanos</h3>
        <p>{text}</p>
      </div>
    </Html>
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

const Title = () => {
  return (
    <Text
      position={[-40, 15, -25]}
      fontSize={5}
      color="Black"
      anchorX="center"
      anchorY="middle"
      maxWidth={15}
      lineHeight={1.2}
      letterSpacing={0.1}
      rotation={[0, Math.PI / 4, 0]}
    >
      CLEAR WATER
    </Text>
  );
};

const RedirectButton = () => {
  const handleButtonClick = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'p' || event.key === 'P') {
        setMoveBubbles(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleClick = () => {
    setMoveBubbles(true);
  };

  const handleNextProblem = () => {
    navigate('/water-shortage');
  }

  return (
    <>
      <Canvas style={{ height: '100vh', width: '100vw' }} camera={{ position: [0, 10, 25], fov: 75 }} shadows onClick={handleClick}>
        <ambientLight intensity={0.50} />
        <pointLight 
          position={[10, 10, 10]} 
          intensity={0.8} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <directionalLight 
          position={[-5, 10, 5]} 
          intensity={3} 
          castShadow 
          shadow-mapSize-width={1024} 
          shadow-mapSize-height={1024} 
        />
        <Background />
        <BackgroundSound />
        <Physics>
        <Floor />
        <RockModel />
        </Physics>
        <PlantasModel />
        <FishModels />
        <OceanAcidificationText />
        <InstructionText />
        <Title /> 
        <OceanAcidificationSolutionText />
        {Array.from({ length: 50 }).map((_, index) => (
          <Bubble key={index} moveUp={moveBubbles} />
        ))}
        <CameraController />
        <EffectComposer>
          <Bloom intensity={1.0} threshold={0.5} /> 
          <Noise opacity={0.2} />
        </EffectComposer>
      </Canvas>
      <button
      onClick={handleNextProblem}
      style={{
        position: 'absolute',
        top: '20px',
        left: '75%',
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
      Siguiente problema ambiental
    </button>
      <RedirectButton />
    </>
  );
};

export default Scene;
