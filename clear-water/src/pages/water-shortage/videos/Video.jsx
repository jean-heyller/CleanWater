import { useVideoTexture, useTexture } from "@react-three/drei";
import { useCallback } from "react";
import { useState } from "react";
import PostProcessing from "../postprocessing/PostProcessing";

const Video = ({ setIsVideoOpen, isVideoOpen, ...props }) => {
  const [pause, setPause] = useState(false);

  const texture = useVideoTexture("/videos/escasez_agua.mp4", {
    muted: false,
    loop: false,
    start: false,
  });

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  const handleRestart = () => {
    texture.image.currentTime = 0;
    texture.image.play();
    setPause(false);
  };

  const handleExit = () => {
    texture.image.currentTime = 0;
    texture.image.pause();
    setIsVideoOpen(false);
  };

  const handleOpenVideo = () => {
    setIsVideoOpen(true);
    texture.image.play();
  }

  const exitTexture = useTexture("/img/exit.png");
  const playTexture = useTexture("/img/play.png");
  const restartTexture = useTexture("/img/reset.png");
  const videoLogoTexture = useTexture("/img/video.png");

  return (
    <group {...props}>
      {isVideoOpen ? (
        <>
          <mesh onClick={handleVideo}>
            <planeGeometry args={[2, 1.15]} />
            <meshBasicMaterial
              map={texture}
              toneMapped={false}
              transparent={true}
              opacity={0.95}
            />
          </mesh>
          <mesh
            position={[0, -0.5, 1]}
            onClick={handleRestart}
            castShadow
            receiveShadow
          >
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial color="purple" />
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.15, 0.15, 1]} />
              <meshBasicMaterial map={restartTexture} transparent={true} />
            </mesh>
          </mesh>
          <mesh
            position={[-0.3, -0.5, 1]}
            onClick={handleVideo}
            castShadow
            receiveShadow
          >
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial color="green" />
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.15, 0.15, 1]} />
              <meshBasicMaterial map={playTexture} transparent={true} />
            </mesh>
          </mesh>
          <mesh
            position={[0.3, -0.5, 1]}
            onClick={handleExit}
            castShadow
            receiveShadow
          >
            <circleGeometry args={[0.1, 32]} />
            <meshBasicMaterial color="red" />
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[0.15, 0.15, 1]} />
              <meshBasicMaterial map={exitTexture} transparent={true} />
            </mesh>
          </mesh>
          <PostProcessing />
        </>
      ) : (
        <mesh
          position={[0, -0.7, 1.1]}
          onClick={handleOpenVideo}
          castShadow
          receiveShadow
        >
          <circleGeometry args={[0.1, 32]} />
          <meshBasicMaterial color="white" />
          <mesh position={[0, 0, 0.001]}>
            <planeGeometry args={[0.15, 0.15, 1]} />
            <meshBasicMaterial map={videoLogoTexture} transparent={true} />
          </mesh>
        </mesh>
      )}
    </group>
  );
};

export default Video;
