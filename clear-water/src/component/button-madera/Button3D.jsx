import React from 'react';
import { Box } from '@react-three/drei';
import { Text3D, OrbitControls } from "@react-three/drei";

const Button3D = ({ position, onClick, text }) => {
  return (
    <Box
      position={position}
      args={[3, 1, 0.2]} // Tamaño del botón
      onClick={onClick}
    >
      <meshStandardMaterial attach="material" color="saddlebrown" />
      <Text3D
        position={[-0.7, 0, 0.2]}
        font="/fonts/3d/blue-ocean.json"
        size={0.5}
        height={0.1}
      >
        {text}
        <meshStandardMaterial attach="material" color="#FFFFFF" />
      </Text3D>
    </Box>
  );
};

export default Button3D;