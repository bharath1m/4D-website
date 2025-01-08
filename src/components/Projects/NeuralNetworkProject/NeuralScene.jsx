// src/components/Projects/NeuralNetworkProject/NeuralScene.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NeuralScene = () => {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
  });

  // Create neural network visualization
  const createNeurons = () => {
    const neurons = [];
    const layers = 4;
    const neuronsPerLayer = 6;

    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < neuronsPerLayer; i++) {
        const x = (layer - layers / 2) * 2;
        const y = (i - neuronsPerLayer / 2) * 1.2;
        neurons.push(
          <group key={`${layer}-${i}`} position={[x, y, 0]}>
            <mesh>
              <sphereGeometry args={[0.2, 32, 32]} />
              <meshStandardMaterial
                color="#ffffff"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </group>
        );
      }
    }
    return neurons;
  };

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      {createNeurons()}
      {/* Add connections between neurons */}
    </group>
  );
};

export default NeuralScene;