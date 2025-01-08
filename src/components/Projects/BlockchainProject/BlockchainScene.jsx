// src/components/Projects/BlockchainProject/BlockchainScene.jsx
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const BlockchainScene = () => {
  const groupRef = useRef();
  const blocksRef = useRef([]);

  // Create blockchain blocks
  const blocks = useMemo(() => {
    const blockCount = 8;
    const blocks = [];
    
    for (let i = 0; i < blockCount; i++) {
      blocks.push({
        position: [
          Math.cos((i / blockCount) * Math.PI * 2) * 3,
          Math.sin((i / blockCount) * Math.PI * 2) * 3,
          0
        ],
        rotation: [0, 0, (i / blockCount) * Math.PI * 2],
        color: new THREE.Color().setHSL(i / blockCount, 0.8, 0.5)
      });
    }
    return blocks;
  }, []);

  // Animation
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    groupRef.current.rotation.z = time * 0.1;
    
    blocksRef.current.forEach((block, i) => {
      if (block) {
        block.position.z = Math.sin(time + i) * 0.5;
        block.rotation.x = time * 0.2;
        block.rotation.y = time * 0.1;
        
        // Pulse effect
        const scale = 1 + Math.sin(time * 2 + i) * 0.1;
        block.scale.set(scale, scale, scale);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Ambient and point lights for better visibility */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff00ff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00ffff" />

      {/* Blockchain blocks */}
      {blocks.map((block, i) => (
        <group key={i} position={block.position} rotation={block.rotation}>
          {/* Main block */}
          <mesh ref={el => blocksRef.current[i] = el}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={block.color}
              metalness={0.8}
              roughness={0.2}
              emissive={block.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Outer wireframe */}
          <mesh scale={[1.1, 1.1, 1.1]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial
              color="#ffffff"
              wireframe
              transparent
              opacity={0.3}
            />
          </mesh>

          {/* Connection lines */}
          <line>
            <bufferGeometry
              attach="geometry"
              {...new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(
                  blocks[(i + 1) % blocks.length].position[0] - block.position[0],
                  blocks[(i + 1) % blocks.length].position[1] - block.position[1],
                  0
                )
              ])}
            />
            <lineBasicMaterial
              attach="material"
              color="#00ffff"
              opacity={0.6}
              transparent
              linewidth={2}
            />
          </line>

          {/* Glowing particles */}
          {[...Array(4)].map((_, particleIndex) => (
            <mesh
              key={particleIndex}
              position={[
                Math.random() * 2 - 1,
                Math.random() * 2 - 1,
                Math.random() * 2 - 1
              ]}
              scale={0.1}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshBasicMaterial
                color="#ff00ff"
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Central core */}
      <group>
        <mesh>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial
            color="#00ffff"
            metalness={1}
            roughness={0}
            opacity={0.7}
            transparent
            emissive="#00ffff"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Core glow */}
        <mesh scale={[1.2, 1.2, 1.2]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial
            color="#ff00ff"
            transparent
            opacity={0.1}
          />
        </mesh>
      </group>

      {/* Background particles */}
      {[...Array(50)].map((_, i) => (
        <mesh
          key={`particle-${i}`}
          position={[
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          ]}
        >
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial
            color={i % 2 ? "#ff00ff" : "#00ffff"}
            transparent
            opacity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default BlockchainScene;