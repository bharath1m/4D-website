// src/components/Scene/RubiksCube.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import * as THREE from 'three';

const RubiksCube = () => {
  const groupRef = useRef();

  // Create materials with the exact metallic colors from the image
  const materials = {
    primary: new THREE.MeshPhysicalMaterial({
      color: '#2b0147',         // Base dark purple
      metalness: 1,
      roughness: 0.2,
      clearcoat: 1,             // Add clearcoat for extra shine
      clearcoatRoughness: 0.2,
      emissive: '#ff00ff',      // Pink glow
      emissiveIntensity: 0.2,
    }),
    secondary: new THREE.MeshPhysicalMaterial({
      color: '#440066',         // Lighter purple
      metalness: 1,
      roughness: 0.1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      emissive: '#ff00ff',
      emissiveIntensity: 0.3,
    }),
    edges: new THREE.LineBasicMaterial({
      color: '#ff00ff',         // Neon pink edges
      transparent: true,
      opacity: 0.8,
    })
  };

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.1 + 1.5;
    groupRef.current.rotation.y = t * 0.2;
  });

  const createCube = () => {
    const cubelets = [];
    const size = 3;
    const gap = 0.06;  // Increased gap for better visibility
    const scale = 0.5;

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        for (let z = 0; z < size; z++) {
          // Skip internal cube
          if (x === 1 && y === 1 && z === 1) continue;

          const isEdge = x === 0 || x === 2 || y === 0 || y === 2 || z === 0 || z === 2;
          const position = [
            (x - 1) * (scale + gap),
            (y - 1) * (scale + gap),
            (z - 1) * (scale + gap)
          ];

          cubelets.push(
            <group key={`${x}-${y}-${z}`} position={position}>
              {/* Main cubelet */}
              <Box args={[scale, scale, scale]}>
                <meshPhysicalMaterial
                  {...(isEdge ? materials.secondary : materials.primary)}
                  envMapIntensity={1}
                />
              </Box>

              {/* Glowing edges */}
              <lineSegments>
                <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(scale + 0.01, scale + 0.01, scale + 0.01)]} />
                <lineBasicMaterial
                  attach="material"
                  color="#ff00ff"
                  transparent
                  opacity={0.8}
                  linewidth={2}
                />
              </lineSegments>

              {/* Edge glow */}
              <Box args={[scale + 0.02, scale + 0.02, scale + 0.02]}>
                <meshBasicMaterial
                  color="#ff00ff"
                  transparent
                  opacity={0.1}
                  side={THREE.BackSide}
                />
              </Box>
            </group>
          );
        }
      }
    }
    return cubelets;
  };

  return (
    <group ref={groupRef} position={[0, 1.5, 0]} scale={2}>
      {/* Environment map for metallic reflections */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />

      {/* Main cube structure */}
      <group>{createCube()}</group>

      {/* Overall glow effect */}
      <Box args={[2, 2, 2]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color="#ff00ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Box>

      {/* Center glow */}
      <pointLight
        color="#ff00ff"
        intensity={2}
        distance={4}
        decay={2}
      />
    </group>
  );
};

export default RubiksCube;