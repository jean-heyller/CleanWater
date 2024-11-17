import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";


const Controls = ({ element, target }) => {
  const orbitControlsRef = useRef();
  const epsilon = useMemo(() => 0.001, []);

  useFrame(({ camera }) => {
    // Check if camera is close enough to sign's position, then set it directly
    if (
      Math.abs(camera.position.x - element.positionCamera.x) < epsilon &&
      Math.abs(camera.position.y - element.positionCamera.y) < epsilon &&
      Math.abs(camera.position.z - element.positionCamera.z) < epsilon
    ) {
      camera.position.set(
        element.positionCamera.x,
        element.positionCamera.y,
        element.positionCamera.z
      );
      return;
    }

    const step = 0.02;

    // Interpolate camera position towards problems's position
    const newPosX = MathUtils.lerp(
      camera.position.x,
      element.positionCamera.x,
      step
    );
    const newPosY = MathUtils.lerp(
      camera.position.y,
      element.positionCamera.y,
      step
    );
    const newPosZ = MathUtils.lerp(
      camera.position.z,
      element.positionCamera.z,
      step
    );

    camera.position.set(newPosX, newPosY, newPosZ);
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      target={target}
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={1.75}
    />
  );
};

export default Controls;
