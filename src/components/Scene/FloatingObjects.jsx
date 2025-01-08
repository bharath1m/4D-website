// src/components/Scene/FloatingObjects.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const FloatingObjects = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      // Custom floating animation for each object
      child.position.y += Math.sin(t + i) * 0.001;
      child.rotation.x = t * 0.2 + i;
      child.rotation.z = t * 0.1 + i;
    });
  });

  return (
    <group ref={groupRef}>
      {/* Floating wireframe cubes */}
      <Box position={[-4, 2, -2]} scale={0.5}>
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </Box>
      <Box position={[4, 3, 1]} scale={0.3}>
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </Box>
      <Box position={[-3, 4, 2]} scale={0.4}>
        <meshBasicMaterial color="#ff00ff" wireframe transparent opacity={0.5} />
      </Box>

      {/* Glowing spheres */}
      <Sphere position={[3, 2, -3]} scale={0.3}>
        <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
      </Sphere>
      <Sphere position={[-2, 3, 3]} scale={0.2}>
        <meshBasicMaterial color="#ff00ff" transparent opacity={0.6} />
      </Sphere>

      {/* Chromatic aberration spheres */}
      <group position={[2, 4, -1]}>
        <Sphere scale={0.25}>
          <meshBasicMaterial color="#ff0000" transparent opacity={0.3} />
        </Sphere>
        <Sphere scale={0.252}>
          <meshBasicMaterial color="#00ffff" transparent opacity={0.3} />
        </Sphere>
      </group>
    </group>
  );
};

export default FloatingObjects;