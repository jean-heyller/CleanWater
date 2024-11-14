import React from "react";
import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[-5.5, 5, -20]}
        intensity={1}
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
    </>
  );
};

export default Staging;
