// src/components/Projects/QuantumComputingProject/QuantumScene.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const QuantumScene = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.2;
    groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.2;
  });

  // Create quantum sphere with orbiting particles
  const createQuantumSphere = () => {
    return (
      <group>
        {/* Central sphere */}
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={0.9}
            roughness={0.1}
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Orbiting particles */}
        {[...Array(24)].map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          const radius = 2;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle) * radius,
                0
              ]}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial
                color="#ff00ff"
                emissive="#ff00ff"
                emissiveIntensity={0.5}
              />
            </mesh>
          );
        })}
      </group>
    );
  };

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      {createQuantumSphere()}
    </group>
  );
};

export default QuantumScene;