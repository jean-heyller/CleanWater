import React, { forwardRef } from 'react';
import { Box } from '@react-three/drei';
import { Text3D } from "@react-three/drei";

const Button3D = forwardRef(({ position, onClick, text }, ref) => {
  return (
    <Box
      ref={ref}
      position={position}
      args={[5, 1, 0.2]} // Tamaño del botón
      onClick={onClick}
    >
      <meshStandardMaterial attach="material" color="saddlebrown" />
      <Text3D
        position={[-1.2, -0.2, 0.2]}
        font="/fonts/3d/blue-ocean.json"
        size={0.5}
        height={0.1}
      >
        {text}
        <meshStandardMaterial attach="material" color="#FFFFFF" />
      </Text3D>
    </Box>
  );
});

export default Button3D;