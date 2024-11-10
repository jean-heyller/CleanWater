import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";
import { useProblemStore } from "../../../stores/store-problem-selected";

const Controls = () => {
  const orbitControlsRef = useRef();
  const { problem } = useProblemStore();
  const epsilon = useMemo(() => 0.001, []);

  useFrame(({ camera }) => {
    // Check if camera is close enough to sign's position, then set it directly
    if (
      Math.abs(camera.position.x - problem.positionCamera.x) < epsilon &&
      Math.abs(camera.position.y - problem.positionCamera.y) < epsilon &&
      Math.abs(camera.position.z - problem.positionCamera.z) < epsilon
    ) {
      camera.position.set(
        problem.positionCamera.x,
        problem.positionCamera.y,
        problem.positionCamera.z
      );
      return;
    }

    const step = 0.02;

    // Interpolate camera position towards sign's position
    const newPosX = MathUtils.lerp(
      camera.position.x,
      problem.positionCamera.x,
      step
    );
    const newPosY = MathUtils.lerp(
      camera.position.y,
      problem.positionCamera.y,
      step
    );
    const newPosZ = MathUtils.lerp(
      camera.position.z,
      problem.positionCamera.z,
      step
    );

    camera.position.set(newPosX, newPosY, newPosZ);
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      target={[-14, -1, 20]}
      enableZoom={false}
      enablePan={false}
      maxPolarAngle={1.75}
    />
  );
};

export default Controls;
