import { Canvas } from "@react-three/fiber";
import PostProcessing from "../postProcessing/PostProcessing";
import VideoMar from "../videoMar/VideoMar";
import { useRef } from "react";

export const Video = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div style={{ height: "100vh", width: "100vw", position: "relative" }}>
      <h1
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          color: "black",
          zIndex: 1,
          fontSize: "2rem",
        }}
      >
        No lastimes su hogar
      </h1>
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <button
          onClick={handlePlay}
          style={{
            marginRight: "10px",
            padding: "10px",
            backgroundColor: "skyblue",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Reproducir
        </button>
        <button
          onClick={handlePause}
          style={{
            padding: "10px",
            backgroundColor: "skyblue",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Pausar
        </button>
      </div>
      <Canvas>
        <PostProcessing>
          <VideoMar videoRef={videoRef} />
        </PostProcessing>
      </Canvas>
    </div>
  );
};

export default Video;
